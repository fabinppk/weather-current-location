import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '_atoms/Arrow';

import style from '_molecules/MinMax/index.module.scss';

const MinMax = ({ min, max }) => {
    return (
        <div className={style.blockMinMax}>
            <div className={style.blockMin}>
                <Arrow />
                <p>{min.toFixed()}ºC</p>
            </div>

            <div className={style.blockMax}>
                <Arrow />
                <p>{max.toFixed()}ºC</p>
            </div>
        </div>
    );
};

MinMax.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
};

export default MinMax;
