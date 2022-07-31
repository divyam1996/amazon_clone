import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Loginform from './Components/Forms/Loginform';
import { BrowserRouter, Route, Link,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
    <BrowserRouter> 
    <Routes>
    {/* <Route exact path="/">
            <Redirect to="/start"></Redirect>
          </Route> */}
          {/* <Route path="/start" component={Navbar}></Route> */}
      <Route path="/login" element={<Loginform/>}></Route>
      {/* <Loginform/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
