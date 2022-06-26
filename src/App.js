import React, { Component }  from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import './stylssheets/home.css';
import './stylssheets/header-footer.css';
import './stylssheets/courosal.css';
import './stylssheets/Projects-Courses.css';
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/Projects' exact element={<Projects/>} />
      <Route path='/Courses' exact element={<Courses/>} />
      <Route path='/Contact' exact element={<Contact/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
