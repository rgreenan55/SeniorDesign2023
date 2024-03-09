import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: { 'Access-Control-Allow-Origin': '*' }
});

const RequestAIArguments = async () => {
    try {
        let response = await api.get('/get-ai-args');
        let data = response.data;

        // Of the form [{name: 'x', type: 'double'}]

        return data;
    } catch(e) {
        return [];
    }
}

const GetAssessmentByArguments = async (data) => {
    try {
        // Data of the form [{name: 'x', data: 'xyz'}]
        let response = await api.get('/get-assessment-by-arguments', { params: { arguments: data }});
        let data = response.data;

        return data;
    } catch(e) {
        return null;
    }
}

const GetAssessmentByAddress = async (data) => {
    try {
        // Address Data
        let response = await api.get('/get-assessment-by-address', { params: { arguments: data }});

        return null;
    } catch(e) {
        return null;
    }
}

export {
    RequestAIArguments,
    GetAssessmentByArguments,
    GetAssessmentByAddress
};