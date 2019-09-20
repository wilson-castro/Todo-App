import React from 'react';
import Menu from './components/menu';
import Routes from './routes.js';
import './template/styles.css';

function App() {
  return (
    <div className="App">
      <Menu/>

      <Routes/>
    </div>
  );
}

export default App;
