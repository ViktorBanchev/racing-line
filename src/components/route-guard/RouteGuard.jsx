import { useContext } from "react";
import UserContext from "../../contexts/userContext.jsx";
import { Navigate, Outlet } from "react-router";

export function AuthRouteGuard() {
    const { isAuthenticated } = useContext(UserContext);

    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }

    return <Outlet />;
}

export function GuestRouteGuard() {
    const { isAuthenticated } = useContext(UserContext);

    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    return <Outlet />
}