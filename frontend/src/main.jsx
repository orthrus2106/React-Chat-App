import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import init from './init.jsx';

init().then((vdom) => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      {vdom}
    </StrictMode>
  )
})
