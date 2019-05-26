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
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className="vn_inner">
                  <div className='vn_icon_square bck_red'>
                    <div className='vn_icon'
                      style={{
                        background: `url(${icon_calendar}`
                      }} ></div>
                  </div>
                  <div className="vn_title">
                    Event Date & Time
                    </div>
                  <div className="vn_desc">
                    21 Jule 2019 18-00
                </div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={2500}>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className="vn_inner">
                  <div className='vn_icon_square bck_yellow'>
                    <div className='vn_icon'
                      style={{
                        background: `url(${icon_location}`
                      }} ></div>
                  </div>
                  <div className="vn_title">
                    Location
                    </div>
                  <div className="vn_desc">
                    LUZHNIKI
                </div>
                </div>
              </div>
            </div>
          </Zoom>

        </div>
      </div>
    </div>
  );
};

export default Info;