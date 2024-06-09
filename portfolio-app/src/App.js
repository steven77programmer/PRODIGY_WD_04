import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/PHome';
import About from './components/About';
import ScrollProgress from './components/ScrollProgress';
//import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <div id="progress">  
  <faArrowUp id="progress-value"/>
</div> */}
      <Navbar />
      <Home />
      <About />
      <ScrollProgress />
    </div>
  );
}

export default App;
