import React from 'react';
import Carrousel from './Carrousel';

import metLogo from './../../resources/images/metLogo.svg';

const FeaturedIndex = () => {
    return (
        <div style={{ positioin: 'relative', }}>
            <Carrousel />
            <div className='img-wrapper'>
                {/* <img className='img-logo'
                    src={metLogo}
                /> */}
                <p className='center' style={{
                    textAlign: 'center',
                    fontSize: '40px',
                    fontWeight: 'bold',
                    color: 'yellow'
                }}>Пацан сказал, пацан сделал</p>
            </div>

        </div>
    )
}

export default FeaturedIndex;
