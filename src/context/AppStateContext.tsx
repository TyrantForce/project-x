import React, { useCallback, useReducer } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listCategorys } from '../graphql/queries'
import { ListCategorysQuery } from '../API'
import constate from 'constate'

export type Category = {
  nombre: string
  descripcion: string
}

type AppState = {
  categories: Category[]
  //formData: Restaurant;
}

type Action =
  | {
      type: 'QUERY'
      payload: Category[]
    }
  | {
      type: 'SUBSCRIPTION'
      payload: Category
    }

const initialState: AppState = {
  categories: [],
}

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'QUERY':
      return { ...state, categories: action.payload }
    case 'SUBSCRIPTION':
      return { ...state, categories: [...state.categories, action.payload] }
    default:
      return state
  }
}

const useAppState = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getCategories = useCallback(async () => {
    const categories = (await API.graphql(graphqlOperation(listCategorys))) as {
      data: ListCategorysQuery
    }

    dispatch({
      type: 'QUERY',
      payload: categories.data.listCategorys?.items as Category[],
    })
  }, [dispatch])

  return { ...state, dispatch, getCategories }
}

const [AppStateProvider, useAppStateContext] = constate(useAppState)

export { AppStateProvider, useAppStateContext }
