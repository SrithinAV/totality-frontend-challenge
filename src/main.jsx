import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter  } from 'react-router-dom'
import HouseContextProvider from './components/HouseContext.jsx'

createRoot(document.getElementById('root')).render(
 
   <HouseContextProvider> 
<BrowserRouter>
   <App />
  </BrowserRouter>
   </HouseContextProvider>

  
)
