import React from 'react';
import './../../resources/index.scss';
import Header from '../Header/Header';
import FeaturedIndex from '../features/FeaturedIndex';
import Info from '../Info/Info';

import Footer from './../Footer/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Header />
      <FeaturedIndex />
      <Element name='info'>
        <Info />
      </Element>
    </div>
  );
}

export default App;
