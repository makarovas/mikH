import React from 'react';
import Carrousel from './Carrousel';
import Timer from './Timer';
import metLogo from './../../resources/images/metLogo.svg';

const FeaturedIndex = () => {
    return (
        <div style={{ positioin: 'relative', }}>
            <Carrousel />
            <div className='img-wrapper'>
                <img className='img-logo'
                    src={metLogo}
                />
            </div>
            <Timer />
        </div>
    )
}

export default FeaturedIndex;
