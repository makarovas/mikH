import React, { Component } from 'react';
import Slide from 'react-reveal';


export default class Timer extends Component {
  state = {
    deadline: 'Jul, 21, 2019',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log('Date passed');
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor((time / (1000 * 60 * 60 * 24)));
      this.setState({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      })
    }
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }
  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <Slide left delay={1000}>
        <div className='countdown_wrapper'>
          <div className='countdown_top'>
            Event starts in
                </div>
          <div className='countdown_bottom'>
            <div className='countdown_item'>
              <div className='countdown_time'>
                {days}
              </div>
              <div className="coutdown_tag">
                Days
                        </div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>
                {hours}
              </div>
              <div className="coutdown_tag">
                hs
                        </div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>
                {minutes}
              </div>
              <div className="coutdown_tag">
                min
                        </div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>
                {seconds}
              </div>
              <div className="coutdown_tag">
                sec
                        </div>
            </div>
          </div>
        </div>
      </Slide>

    )
  }
}
