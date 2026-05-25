import { createContext, useContext } from "react"
import useRequest from "../hooks/useRequest.js"
import useLocalStorage from "../hooks/useLocalStorage.js";

const UserContext = createContext({
    isAuthenticated: false,
    user: {
        username: '',
        email: '',
        password: '',
        createdAt: 0,
        _id: '',
        accessToken: ''
    },
    registerHandler() { },
    loginHandler() { },
    logoutHandler() { },
})

export function UserProvider(props) {
    const [user, setUser] = useLocalStorage(null, 'auth');
    const { request } = useRequest();

    const registerHandler = async ({ username, email, password, confirmPassword, image }) => {
        const newUser = { username, email, password, confirmPassword, image };
        const result = await request('/auth/register', 'POST', newUser);
        setUser({
            accessToken: result.data.accessToken,
            ...result.data.user
        });
    }

    const loginHandler = async ({ email, password }) => {
        const result = await request('/auth/login', 'POST', { email, password });
        setUser({
            accessToken: result.data.accessToken,
            ...result.data.user
        });
    }

    const logoutHandler = () => {
        setUser(null);
    }

    const invalidateTokenHandler = async () => {
        setUser(null);
    }


    const userContextValues = {
        user,
        isAuthenticated: !!user?.accessToken,
        registerHandler,
        loginHandler,
        logoutHandler,
        invalidateTokenHandler,
    }

    return (
        <UserContext.Provider value={userContextValues}>
            {props.children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}

export default UserContext;