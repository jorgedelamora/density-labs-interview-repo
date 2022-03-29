import React, { useEffect, useState } from 'react';

import ThePokedex from './components/views/ThePokedex';

import './App.scss';
import 'antd/dist/antd.css';

function App() {

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <ThePokedex/>
    </div>
  );
}

export default App;

