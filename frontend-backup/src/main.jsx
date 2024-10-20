import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Heading from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home/>
  </StrictMode>,
)
