import { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/userContext.jsx";

export default function Logout() {
    const navigate = useNavigate();
    const {logoutHandler} = useContext(UserContext);
    logoutHandler()
        .then(() => navigate('/'))
        .catch((err) => {
            console.log(err.message);
            alert('Problem with logout');
            navigate('/');
        })

    return null;
}