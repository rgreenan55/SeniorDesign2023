import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: { 'Access-Control-Allow-Origin': '*' }
});

/* Requests Argument for FilterBox */
const RequestAIArguments = async () => {
    try {
        let response = await api.get('/get-ai-args');
        let data = response.data;

        return data;
    } catch(e) {
        return [];
    }
}

/* Requests Assessment from FilterBox Inputs */
const GetAssessmentByArguments = async (data) => {
    try {
        let response = await api.get('/get-assessment-by-arguments', { params: { arguments: data }});
        let data = response.data;

        return data;
    } catch(e) {
        return null;
    }
}

/* Requests Assessment from given Address */
const GetAssessmentByAddress = async (data) => {
    try {
        let response = await api.get('/get-assessment-by-address', { params: { address: data }});

        if (response.data == "No address provided") throw new Error(response.data);

        return response.data;
    } catch(e) {
        return null;
    }
}

export {
    RequestAIArguments,
    GetAssessmentByArguments,
    GetAssessmentByAddress
};