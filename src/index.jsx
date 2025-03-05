import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './styles.css'

import App from './App'

const root = createRoot(document.querySelector("#root"))
root.render(<App />)

if (module.hot) module.hot.accept();
