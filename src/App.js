import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import JumboAnimation from './components/JumboAnimation';
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App vh-100">
        <Welcome/>
        <Navbar/>
        <JumboAnimation/>
    </div>
  );
}

export default App;
