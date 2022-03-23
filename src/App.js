import React from 'react';
import Navbar from './Navbar/Navbar.js';
import Header from './Header/Header.js';
import Main from './Main/Main.js';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Main/>
      
    </div>
  );
}

export default App;
