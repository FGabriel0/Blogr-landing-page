import React from 'react';
import '../../App.css';

import Navbar from '../Navbar';
import './Home.css'

export default function Home() {
  return (
    <div className='banner'>
    <header>
      <Navbar/>
      <div class="header-box">
        <h1 class="header-title">
          A modern 
          <span> publishing platform</span>
        </h1>
        <div class="header-para">
          Grow your audience and build your 
          <span>online brand</span>
        </div>
        <div class="header-box-btns">
          <button class="btn start-btn">
            Start for Free
          </button>
          <button class="btn learn-more-btn">
            Learn More
          </button>
        </div>
      </div>
  </header>
  </div>
  );
}
