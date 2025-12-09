import { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/userContext.jsx";
import { toast } from "react-toastify";

export default function Logout() {
    const navigate = useNavigate();
    const {logoutHandler} = useContext(UserContext);
    logoutHandler()
        .then(() => {
            navigate('/')
            toast.success('Logout successful!', {autoClose: 2000});
        })
        .catch(() => {
            toast.error('Problem with logout!');
            navigate('/');
        })

    return null;
}