import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { setThemeColor } from '_helpers/setBrowserTheme';
import ButtonRefresh from '_atoms/ButtonRefresh';
import { ToastContainer, toast } from 'react-toastify';
import MinMax from '_molecules/MinMax';
import ShimmerIndex from '_pages/index/shimmer';
import ShimmerMinMax from '_molecules/MinMax/shimmer';
import { getWeather } from '_services/requestWeather';

import 'react-toastify/dist/ReactToastify.css';
import style from '_pages/index/index.module.scss';

const Index = ({ propsWeather }) => {
    const [weather, setWeather] = useState(propsWeather);
    const [loading, setLoading] = useState(false);

    const defineUrlImage = (icon) => {
        return `https://openweathermap.org/img/wn/${icon}@4x.png`;
    };

    const getLocation = async ({ latitude, longitude }) => {
        setLoading(true);
        try {
            const responseWeather = await getWeather({
                latitude,
                longitude,
                // city: 'rio de janeiro',
            });
            setWeather(responseWeather);
            setThemeColor();
            setLoading(true);
        } catch (error) {
            toast.error('🦄 Limite da API Excedido, espere alguns minutos e atualize a página!');
        } finally {
            setLoading(false);
        }
    };

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        });
    };

    const fallbackLoading = () => {
        setWeather(null);
        getPosition();
    };

    useEffect(() => {
        if (navigator.geolocation) {
            getPosition();
        }
    }, []);

    return (
        <>
            <ButtonRefresh rotate={loading} setLoading={fallbackLoading} />
            {weather ? (
                <div
                    data-testid="weather"
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
                <div data-testid="empty-weather" className={style.content}>
                    <ShimmerIndex />
                    <ShimmerMinMax />
                </div>
            )}
            <ToastContainer
                position="top-center"
                autoClose={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
            />
        </>
    );
};

Index.propTypes = {
    propsWeather: PropTypes.shape({
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string,
            })
        ),
    }),
};

Index.defaultProps = {
    propsWeather: null,
};

export default Index;
