import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import { StrictMode } from 'react'
import { NuqsAdapter } from 'nuqs/adapters/react'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <NuqsAdapter>
      <App />
    </NuqsAdapter>
  </StrictMode>,
)
