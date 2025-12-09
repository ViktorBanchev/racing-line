import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router'
import {UserProvider} from './contexts/userContext.jsx'
import {NotificationProvider} from "./contexts/NotificationsContext.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserProvider>
            <NotificationProvider>
                <App/>
            </NotificationProvider>
        </UserProvider>
    </BrowserRouter>
)
