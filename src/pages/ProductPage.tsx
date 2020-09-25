import { API, graphqlOperation } from 'aws-amplify'
import React, { useEffect, useReducer, useState } from 'react'
import { ListProductsQuery } from '../API'
import { createProduct } from '../graphql/mutations'
import { listProducts } from '../graphql/queries'
import { onCreateProduct } from '../graphql/subscriptions'
import './../assets/css/shopping.scss'
import {
  ShoppingCartOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'
import Badge from 'antd/lib/badge'

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

  const [order, setOrder] = useState<Product[]>([])


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

  useEffect(() => {
    console.log('inicia componente')
  }, [])

  useEffect(() => {
    console.log('cambia estado (order)')
  }, [order.reduce((a, b) => a + (b.cantidad || 0), 0)])

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

  const addProductToCart = (product: Product) => {
    const id = order.findIndex(o => o.id === product.id)
    if ( id === -1 ) {
      setOrder(order => [...order, { ...product, cantidad: 1 }])
      //setOrder(order => order.concat(product))
    } else {
      const p = order.map(el => el.id === product.id ? { ...el, cantidad: el.cantidad ? el.cantidad + 1 : 1 } : el)
      setOrder(p)
    }
  }

  const minusProductToCart = (product: Product) => {
    /* if ( order.findIndex(o => o.id === product.id) !== -1 ) {
      
    } */
  }

  if (state.loading) {
    return <h1>Loading ...</h1>
  }

  return (
    <>
      <div className="product-page">
        <div className="shopping-cart">
          <div className="products">
            <h2>Productos</h2>
            <ul>
              {state.products.map((product, index) => (
                <li key={index}>
                  <div className="item">
                    <h3>{product.nombre}</h3>
                    <div className="quantity">
                      <MinusCircleOutlined style={{ fontSize: '30px', cursor: 'pointer' }} />
                      <PlusCircleOutlined style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => addProductToCart(product)} />
                    </div>
                    <span>{product.precio}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart">
              <Badge count={order.reduce((a, b) => a + (b.cantidad || 0), 0)} className="badge" offset={[10, 0]}>
                <ShoppingCartOutlined
                  style={{ fontSize: '30px', color: '#fff' }}
                />
              </Badge>
            </div>
          </div>
        </div>
      </div>
      {/* <h1>Products</h1>
      

      <div className="container">
        <form onSubmit={createNewProduct}>
          Nombre
          <input type="text" name="nombre" onChange={handleChange} /> <br />
          Precio
          <input type="text" name="precio" onChange={handleChange} /> <br />
          <button type="submit">Crear</button>
        </form>
      </div> */}
    </>
  )
}

export default ProductPage
