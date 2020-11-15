export const WEATHER = {
    coord: { lon: -48.5, lat: -27.61 },
    weather: [{ id: 803, main: 'Clouds', description: 'nublado', icon: '04d' }],
    base: 'stations',
    main: {
        temp: 26.37,
        feels_like: 31.27,
        temp_min: 24,
        temp_max: 27.78,
        pressure: 1013,
        humidity: 88,
    },
    visibility: 10000,
    wind: { speed: 1.5, deg: 0 },
    clouds: { all: 75 },
    dt: 1605188371,
    sys: { type: 1, id: 8360, country: 'BR', sunrise: 1605168930, sunset: 1605217265 },
    timezone: -10800,
    id: 6323121,
    name: 'Florianópolis',
    cod: 200,
};

export default {
    WEATHER,
};
