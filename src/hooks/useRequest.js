import {useCallback, useContext, useEffect, useState} from "react"
import UserContext from "../contexts/userContext.jsx"
import { toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_APP_SERVER_URL;

export default function useRequest(url, initialState) {
    const {isAuthenticated, user, invalidateTokenHandler} = useContext(UserContext);
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(true);

    const request = useCallback(async (url, method, data, config = {}) => {
        let options = {}

        if (method) {
            options.method = method
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

        setIsLoading(false);

        if (response.status === 204) {
            return {};
        }

        const result = await response.json();

        if (!response.ok) {
            if (response.status === 403 && isAuthenticated) {
                invalidateTokenHandler();
            }
            throw new Error(result.message);
        }

        return result;


    }, [invalidateTokenHandler, isAuthenticated, user]);

    useEffect(() => {
        if (!url) return;
        request(url)
            .then(result => {
                setData(result);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                toast.error(err.message);
            })
    }, [request, url])

    return {
        request,
        data,
        setData,
        isLoading
    }
}

