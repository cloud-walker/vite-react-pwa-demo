import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ReloadPrompt} from './ReloadPrompt'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <App />
    <ReloadPrompt />
  </>,
)
