import { API, graphqlOperation } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { Category, useAppStateContext } from '../context/AppStateContext'
import { createCategory } from '../graphql/mutations'
import { onCreateCategory } from '../graphql/subscriptions'

type SubscriptionEvent<D> = {
  value: {
    data: D
  }
}

const CategoriesPage = () => {
  const { categories, getCategories, dispatch } = useAppStateContext()

  const [formData, setFormData] = useState<Category>({
    nombre: '',
    descripcion: '',
  })

  useEffect(() => {
    if (categories.length === 0) getCategories()

    const subscription = (API.graphql(
      graphqlOperation(onCreateCategory)
    ) as any).subscribe({
      next: (eventData: SubscriptionEvent<{ onCreateCategory: Category }>) => {
        const payload = eventData.value.data.onCreateCategory
        dispatch({ type: 'SUBSCRIPTION', payload: payload })
      },
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const createNewCategory = async (e: any) => {
    e.preventDefault()
    try {
      const { nombre, descripcion } = formData
      const category = {
        nombre,
        descripcion,
      }

      await API.graphql(graphqlOperation(createCategory, { input: category }))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <ul>
        {categories.length &&
          categories.map((category: Category, index: number) => (
            <li key={index}>{category.nombre}</li>
          ))}
      </ul>
      <hr />
      <div className="container">
        <form onSubmit={createNewCategory}>
          Categoria
          <input type="text" name="nombre" onChange={handleChange} /> <br />
          Descripcion
          <input type="text" name="descripcion" onChange={handleChange} />{' '}
          <br />
          <button type="submit">Crear</button>
        </form>
      </div>
    </>
  )
}

export default CategoriesPage
