import React from "react";
import './App.css';

import Home from './Components/Home.js';
import Contact from './Components/Contact.js';

import Quiz from './Components/QuizContainer/Quiz';

import AuditoryLearner from './Components/QuizContainer/AuditoryLearner';
import KinestheticLearner from './Components/QuizContainer/KinestheticLearner';
import VisualLearner from './Components/QuizContainer/VisualLearner';

// import ResponsiveAppBar from './Components/ResponsiveAppBar';
// import {Route, Link, Routes, Navigate} from "react-router-dom";
import { Navigate, Route, Routes,} from "react-router";
import { Link } from "react-router-dom";
// import ReactDOM from 'react-dom/client';


function App() {
  return (
    <div className="App" id="App">
      <header id="header">
          <nav>
            <ul>
              <li><Link to='/Home'>Home</Link></li>
              <li><Link to='/Contact'>Contact</Link></li>
            </ul>
          </nav>
      </header>
      <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Quiz' element={<Quiz />} />
            <Route path='/AuditoryLearner' element={<AuditoryLearner />} />
            <Route path='/KinestheticLearner' element={<KinestheticLearner />} />
            <Route path='/VisualLearner' element={<VisualLearner/>} />
          </Routes>
      </main>
      <footer id="footer"></footer>
    </div>
  );
}

export default App;