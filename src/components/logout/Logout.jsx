import { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/userContext.jsx";
import {useNotificationsContext} from "../../contexts/NotificationsContext.jsx";

export default function Logout() {
    const navigate = useNavigate();
    const {showNotification} = useNotificationsContext()
    const {logoutHandler} = useContext(UserContext);
    logoutHandler()
        .then(() => navigate('/'))
        .catch((err) => {
            showNotification('Problem with logout!', 'error');
            navigate('/');
        })

    return null;
}