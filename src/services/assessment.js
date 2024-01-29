import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/',
    headers: { 'Access-Control-Allow-Origin': '*' }
});

const GetAssessment = async () => {
    //const baseURL = process.env.REACT_APP_API_BASE_URL

    let data = await api.get('/get-test-url')

    return data;
}

export { GetAssessment };