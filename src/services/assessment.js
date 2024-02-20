import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: { 'Access-Control-Allow-Origin': '*' }
});

const GetAssessment = async () => {
    let response = await api.get('/get-test-url');
    let data = response.data;

    return data;
}

export { GetAssessment };