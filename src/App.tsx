import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/products" component={ProductPage} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App
