import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './Context/UserContext.jsx'
import { store } from './Redux/Store.js'
import { Provider } from "react-redux";


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
<UserContext>
<App />
</UserContext>
</Provider>
   
  
)
