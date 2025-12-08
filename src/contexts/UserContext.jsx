import { createContext } from "react"
import useRequest from "../hooks/useRequest.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

const UserContext = createContext({
    isAuthenticated: false,
    user: {
        username: '',
        email: '',
        password: '',
        _createdOn: 0,
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

    const registerHandler = async ({ username, email, password, image }) => {
        const newUser = { username, email, password, image };
        const result = await request('/users/register', 'POST', newUser);
        setUser(result);
    }

    const loginHandler = async ({ email, password }) => {
        const result = await request('/users/login', 'POST', { email, password });
        setUser(result);
    }

    const logoutHandler = () => {
        return request('/users/logout', 'GET', null, { accessToken: user.accessToken })
            .finally(() => setUser(null))
    }

    const userContextValues = {
        user,
        isAuthenticated: !!user?.accessToken,
        registerHandler,
        loginHandler,
        logoutHandler
    }

    return (
        <UserContext.Provider value={userContextValues}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;