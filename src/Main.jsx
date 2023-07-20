import React from 'react' // sempre que usado react
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'


// <<<COMPONENTE RAIZ>>>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
