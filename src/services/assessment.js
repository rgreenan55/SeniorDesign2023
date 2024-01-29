import axios from 'axios';

const baseURL = process.env.API_BASE_URL

const GetAssessment = async () => {
    let data = await axios.get(baseURL)

    return data;
}