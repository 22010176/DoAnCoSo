import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import '@/styles.css'

import App from '@/App'
import store from '@/redux/store'

const root = createRoot(document.querySelector("#root"))
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)

if (module.hot) module.hot.accept();
