import React from 'react';

import style from '_pages/index/shimmer.module.scss';

const ShimmerIndex = () => {
    return (
        <>
            <div className={style.image} />
            <div className={style.block}>
                <div className={style.description} />
                <div className={style.value} />
            </div>
            <p className={style.location} />
        </>
    );
};

export default ShimmerIndex;
