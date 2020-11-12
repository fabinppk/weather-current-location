import axios from 'axios';

export const weatherApi = axios.create({
    baseURL: `${process.env.REACT_APP_URL_API_WEATHER}`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    weatherApi,
};
