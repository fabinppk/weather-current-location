import { weatherApi } from '_services/apiConfig';

export const getWeather = async ({ latitude, longitude, config, city }) => {
    const params = {
        q: city,
        lat: latitude,
        lon: longitude,
        lang: 'pt_br',
        units: 'metric',
        appid: process.env.REACT_APP_TOKEN_API_WEATHER,
        ...config,
    };

    return weatherApi
        .get(`/weather`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            throw Error(err);
        });
};

export default { getWeather };
