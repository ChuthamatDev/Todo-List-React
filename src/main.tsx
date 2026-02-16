import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { TodoProvider } from './context/TodoContext'
import { AlertProvider } from './context/AlertContext'

createRoot(document.getElementById('root')!).render(
    <>
        <AlertProvider>
            <TodoProvider>
                <App />
            </TodoProvider>
        </AlertProvider>
    </>
)
