import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from  './components/header';
import About from  './components/aboutSite';
import DisplayBox from './components/consoleView';

function App() {
  return (
    <div className="paraContainer" >
      <Header />
      <About />
      <DisplayBox />
    </div>
  );
}

export default App;
