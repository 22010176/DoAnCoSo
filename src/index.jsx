import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './styles.css'

import App from './app/page'

const root = createRoot(document.querySelector("#root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

if (module.hot) module.hot.accept();
