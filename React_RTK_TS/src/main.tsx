import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import {Provider} from 'react-redux'
import store from './app/store.js'

const root = document.getElementById('root')

if(!root) throw new Error('Root is not available')

createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
)
