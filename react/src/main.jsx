import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Children } from 'react'
import DataProvider from './E-commerce/Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>

  </StrictMode>,
)
