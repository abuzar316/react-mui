import { useState } from 'react';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8000/api/v0/';


const useAxios = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async ({ url, method, body = null }) => {
        setLoading(true);
        try {
            const result = await axios[method](url, body, {
                withCredentials: true
            });
            setResponse(result.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return { response, error, loading, fetchData };
}

export default useAxios;