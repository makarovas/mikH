import React from 'react';
import './../../resources/index.scss';
import Header from '../Header/Header';
import FeaturedIndex from '../features/FeaturedIndex';
import Info from '../Info/Info';
import Highlights from './../Highlights/Highlights';
import Pricing from './../Pricing/Pricing';
import Location from './../Location/Location';
import Footer from './../Footer/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Header  />
      <FeaturedIndex />
      <Element name='info'>
        <Info />
      </Element>
      <Element name='highlights'>
        <Highlights />
      </Element>
      <Element name='pricing'>
        <Pricing />
      </Element>
      <Element name='location'>
        <Location />
      </Element >


    </div>
  );
}

export default App;
