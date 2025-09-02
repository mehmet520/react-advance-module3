import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ChakraRoot from 'chakra/ChakraRoot.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraRoot>
      {' '}
      {/* Chakra kullaniliyorsa provider burada olur */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraRoot>
  </StrictMode>
)
