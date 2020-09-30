import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import Header from './components/layout/Header'
import CategoriesPage from './pages/CategoriesPage'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Header />
        <Switch>
          <Route exact path="/products" component={ProductPage} />
          <Route exact path="/categories" component={CategoriesPage} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  )
}

export default App
