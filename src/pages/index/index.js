import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import MinMax from '_molecules/MinMax';
import ShimmerIndex from '_pages/index/shimmer';
import ShimmerMinMax from '_molecules/MinMax/shimmer';
import { getWeather } from '_services/requestWeather';

import style from '_pages/index/index.module.scss';

const Index = () => {
    const [weather, setWeather] = useState();

    const defineUrlImage = (icon) => {
        return `https://openweathermap.org/img/wn/${icon}@4x.png`;
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(async (position) => {
                const responseWeather = await getWeather({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    // city: 'rio de janeiro',
                });
                setWeather(responseWeather);
            });
        }
    }, []);

    return (
        <>
            {weather ? (
                <div
                    data-testid="app"
                    className={classnames(style.content, style[weather.weather[0].main])}
                >
                    <img
                        className={style.icon}
                        src={defineUrlImage(weather.weather[0].icon)}
                        alt={weather.weather[0].main}
                    />
                    <div className={style.block}>
                        <div className={style.description}>{weather.weather[0].description}</div>
                        <div className={style.value}>{weather.main.temp.toFixed()}</div>
                        <p
                            className={style.location}
                        >{`${weather.name}, ${weather.sys.country}`}</p>
                    </div>
                    <MinMax min={weather.main.temp_min} max={weather.main.temp_max} />
                </div>
            ) : (
                <div data-testid="app" className={style.content}>
                    <ShimmerIndex />
                    <ShimmerMinMax />
                </div>
            )}
        </>
    );
};

export default Index;
