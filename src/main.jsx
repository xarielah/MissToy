import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './assets/styles/index.scss'
import { store } from './store/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)