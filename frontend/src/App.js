
import React, { useState, useEffect } from 'react';
import UserLogin from './components/UserLogin/UserLogin';
import Signup from './components/UserLogin/Signup';
import LandingPage from './components/UserLogin/LandingPage';

function App() {
  
  return (
    <div className="app-container">
      <LandingPage/>
      {/* <UserLogin/>
      <br/>
      <br/>
      <Signup/> */}
    </div>
  );
}

export default App;
