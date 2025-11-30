
const baseUrl = 'http://localhost:3030'

export default function useRequest() {
    async function request(url, method, data) {
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

        const response = await fetch(`${baseUrl}${url}`, options);

        if (!response.ok) {
            throw response.statusText;
        }
        console.log(response);
        

        const result = await response.json();
        return result;
    }

    return {
        request,
    }
}

