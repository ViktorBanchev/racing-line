import {createContext, useCallback, useContext, useState} from "react";
import NotificationDisplay from "../components/notification-display/NotificationDisplay.jsx";

const NotificationsContext = createContext({
    notification: {},
    showNotification() {
    },
    hideNotification() {
    },
})

const TIMEOUT_DURATION = 4000;

export function NotificationProvider(props) {
    const [notification, setNotification] = useState(null);
    const [activeTimeout, setActiveTimeout] = useState(0);

    const hideNotification = useCallback(() => {
        setNotification(null);

        if (activeTimeout) {
            // console.log(activeTimeout);
            // console.log(typeof activeTimeout);
            clearTimeout(activeTimeout);
            setActiveTimeout(null);
        }
    }, [activeTimeout])

    const showNotification = useCallback((message, type = 'success') => {
        if (activeTimeout) {
            // console.log(activeTimeout);
            // console.log(typeof activeTimeout);
            clearTimeout(activeTimeout);
        }

        setNotification({message, type});
        const newTimeout = setTimeout(hideNotification, TIMEOUT_DURATION );
        setActiveTimeout(newTimeout);

    }, [activeTimeout, hideNotification])

    const contextValues = {
        notification,
        showNotification,
        hideNotification,
    }

    return (
        <NotificationsContext.Provider value={contextValues}>
            {props.children}
            <NotificationDisplay notification={notification} hideNotification={hideNotification} />
        </NotificationsContext.Provider>
    )
}

export function useNotificationsContext() {
    return useContext(NotificationsContext);
}

export default NotificationsContext;