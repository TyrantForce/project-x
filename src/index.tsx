import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
// configuraciones de amplify
import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
import { AppStateProvider } from './context/AppStateContext'
Amplify.configure(awsExports)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
