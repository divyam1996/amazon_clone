import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Loginform from './Components/Forms/Loginform';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Loginform/>
    </div>
  );
}

export default App;
