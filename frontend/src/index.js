import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import { GlobalStateProvider } from './components/constants/GlobalStateProvider';

import UserLogin from './components/UserLogin/UserLogin';
import Signup from './components/UserLogin/Signup';
import { DashMain } from './components/DashMain';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { WatchVideo } from './components/WatchVideo';
import { Update } from './components/Update.js';
import { Teachers } from './components/Teachers.js';
import { TeachersProfile } from './components/TeachersProfile.js';
import { SuccessStories } from './components/SuccessStories.js';
import { Dashboard } from './components/Dashboard.js';
import { Guidance } from './components/Guidance.js';
import {Courses} from './components/Courses.js';
import { Playlist } from './components/Playlist.js';



ReactDOM.render(
  // <GlobalStateProvider>
  <React.StrictMode>
    
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path ="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/DashMain" element={<DashMain/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Guidance" element={<Guidance/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/WatchVideo" element={<WatchVideo/>} />
        <Route path="/Update" element={<Update/>} />
        <Route path="/Teachers" element={<Teachers/>} />
        <Route path="/TeachersProfile" element={<TeachersProfile/>} />
        <Route path="/SuccessStories" element={<SuccessStories/>} />
        <Route path="/Courses" element={<Courses/>} />
        <Route path="/Playlist" element={<Playlist/>} />
        
        
        

      </Routes>
    </Router>
   
  </React.StrictMode> ,
  // </GlobalStateProvider>,
  document.getElementById('root')
);

reportWebVitals();

