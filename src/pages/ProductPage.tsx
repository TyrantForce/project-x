import { API, graphqlOperation } from 'aws-amplify'
import React, { useEffect, useReducer } from 'react'
import { ListProductsQuery } from '../API'
import { createProduct } from '../graphql/mutations'
import { listProducts } from '../graphql/queries'
import { onCreateProduct } from '../graphql/subscriptions'

type Product = {
  id?: string
  nombre: string
  descripcion?: string
  cantidad?: number
  precio: number
  status: string
}

type AppState = {
  loading: boolean
  products: Product[]
  formData: Product
}

type Action =
  | {
      type: 'SET_LOADING'
      payload: boolean
    }
  | {
      type: 'SUBSCRIPTION'
      payload: Product
    }
  | {
      type: 'QUERY'
      payload: Product[]
    }
  | {
      type: 'SET_FORM_DATA'
      payload: { [field: string]: string }
    }

type SubscriptionEvent<D> = {
  value: {
    data: D
  }
}

const initialState: AppState = {
  loading: false,
  products: [],
  formData: {
    nombre: '',
    precio: 0,
    status: 'ACTIVE',
  },
}

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'QUERY':
      return { ...state, products: action.payload }
    case 'SUBSCRIPTION':
      return { ...state, products: [...state.products, action.payload] }
    case 'SET_FORM_DATA':
      return { ...state, formData: { ...state.formData, ...action.payload } }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

const ProductPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetchProducts()

    const subscription = (API.graphql(
      graphqlOperation(onCreateProduct)
    ) as any).subscribe({
      next: (eventData: SubscriptionEvent<{ onCreateProduct: Product }>) => {
        const payload = eventData.value.data.onCreateProduct
        console.log(payload)
        dispatch({ type: 'SUBSCRIPTION', payload })
      },
    })

    return () => subscription.unsubscribe()
  }, [])

  const fetchProducts = async () => {
    dispatch({ type: 'SET_LOADING', payload: true })
    const products = (await API.graphql(graphqlOperation(listProducts))) as {
      data: ListProductsQuery
    }

    dispatch({
      type: 'QUERY',
      payload: products.data.listProducts?.items as Product[],
    })
    dispatch({ type: 'SET_LOADING', payload: false })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: 'SET_FORM_DATA',
      payload: { [e.target.name]: e.target.value },
    })

  const createNewProduct = async (e: any) => {
    e.preventDefault()

    //dispatch({ type: 'SET_LOADING', payload: true })

    try {
      const { nombre, precio, status } = state.formData
      const product = {
        nombre,
        precio,
        status,
      }
      await API.graphql(graphqlOperation(createProduct, { input: product }))
      //dispatch({ type: 'SET_LOADING', payload: false })
    } catch (err) {
      console.log(err)
      //dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  if (state.loading) {
    return <h1>Loading ...</h1>
  }

  return (
    <>
      <h1>Products</h1>
      <ul>
        {state.products.map((product, index) => (
          <li key={index}>
            {product.nombre} - {product.precio}
          </li>
        ))}
      </ul>

      <div className="container">
        <form onSubmit={createNewProduct}>
          Nombre
          <input type="text" name="nombre" onChange={handleChange} /> <br />
          Precio
          <input type="text" name="precio" onChange={handleChange} /> <br />
          <button type="submit">Crear</button>
        </form>
      </div>
    </>
  )
}

export default ProductPage
