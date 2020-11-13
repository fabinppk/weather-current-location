import React from 'react';

import style from '_molecules/MinMax/shimmer.module.scss';

const ShimmerMinMax = () => {
    return (
        <div className={style.blockMinMax}>
            <div>
                <div className={style.temp} />
            </div>
            <div>
                <div className={style.temp} />
            </div>
        </div>
    );
};

export default ShimmerMinMax;
