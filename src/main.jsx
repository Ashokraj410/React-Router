import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


/* method 1 router*/

{/*createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)*/

}

createRoot(document.getElementById('root')).render(
  <App/>
)
