import React from 'react';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

const Info = () => {
  return (
    <div className='bck_black'>
      <div className='center_wrapper'>
        <div className="vn_wrapper">
          <Zoom duration={1500}>
            <div> App Store </div>
          </Zoom>
          <Zoom duration={2500}>
            <div>Google play</div>
          </Zoom>
          <Zoom duration={3500}>
            <div>Gmail</div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Info;