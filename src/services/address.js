import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: { 'Access-Control-Allow-Origin': '*' }
});

/* Searches Addres with Prefix */
const SearchAddress = async (prefix) => {
    try {
        let response = await api.get('/get-all-addresses-by-prefix', { params: { prefix }});
        let data = response.data;

        return data;
    } catch(e) {
        return [];
    }
}

export {
    SearchAddress
};