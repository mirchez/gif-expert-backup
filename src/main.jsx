import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles.css'
import {GifExpertApp} from './GifExpertApp' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
)
