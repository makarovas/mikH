import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Info = () => {
  return (
    <div className='center_wrapper'>
      <div className="vn_wrapper">
        <Zoom duration={1500}>
          <a><i className="fab fa-app-store" style={{ fontSize: '48px' }} /></a>
        </Zoom>
        <Zoom duration={2500}>
          <a><i className="fab fa-google-play" style={{ fontSize: '48px' }} /></a>
        </Zoom>
        <Zoom duration={3500}>
          <div></div>
        </Zoom>
      </div>
    </div>
  );
};

export default Info;