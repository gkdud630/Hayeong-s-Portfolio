import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './components/Headers';
import SwiperComponent from './components/SwiperComponent';
import Footer from './components/Footer';
import Mainpage from './pages/Mainpage';

function App() {

  return (
    <div id='wrapper'>
     <Headers/>
     <Mainpage/>
     <Footer/>
    </div>
  );
}

export default App;
