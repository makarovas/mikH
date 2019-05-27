import React from 'react';
import Carrousel from './Carrousel';



const FeaturedIndex = () => {
    return (
        <div style={{ positioin: 'relative', }}>
            <Carrousel />
            <div className='img-wrapper'>

                <p className='center' style={{
                    textAlign: 'center',
                    fontSize: '40px',
                    fontWeight: 'bold',
                    color: 'red'
                }}>Пацан сказал, пацан сделал</p>
            </div>

        </div>
    )
}

export default FeaturedIndex;
