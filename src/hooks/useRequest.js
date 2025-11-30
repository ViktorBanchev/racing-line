import { useContext } from "react"
import UserContext from "../contexts/userContext.jsx"

const baseUrl = 'http://localhost:3030'

export default function useRequest() {
    const {isAuthenticated, user} = useContext(UserContext);

    async function request(url, method, data, config = {}) {
        let options = {}

        if (method) {
            options.method = "POST"
        }

        if (data) {
            options.headers = {
                'content-type': 'application/json'
            }

            options.body = JSON.stringify(data);
        }

        if (config?.accessToken || isAuthenticated) {
            options.headers = {
                ...options.headers,
                'X-Authorization': config.accessToken || user.accessToken,
            }
        }

        const response = await fetch(`${baseUrl}${url}`, options);

        if (!response.ok) {
            throw response.statusText;
        }
        
        if (response.status === 204) {
            return {};
        }

        const result = await response.json();
        return result;
    }

    return {
        request,
    }
}

