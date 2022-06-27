import React from "react";
import './App.css';
import Home from './Components/Home.js';
import Contact from './Components/Contact.js';
// import About from './Components/About.js';
import Quiz from './Components/QuizContainer/Quiz';

// import ResponsiveAppBar from './Components/ResponsiveAppBar';

import { Navigate, Route, Routes,} from "react-router";
import { Link } from "react-router-dom";

// import ReactDOM from 'react-dom/client';
// import {Route, Link, Routes, Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App" id="App">
      <header id="header">
        <div class="imageClass">
          {/* <img class="background" src={require("./assets/patternpad.svg").default} /> */}
          <img class="robot" src={require("./assets/Buddy.png")} />
        </div>
          <nav>
            <ul>
              {/* <li><Link to='/ResponsiveAppBar'>ResponsiveAppBar</Link></li> */}
              <li><Link to='/Home'>Home</Link></li>
              {/* <li><Link to='/About'>About</Link></li> */}
              <li><Link to='/Contact'>Contact</Link></li>
            </ul>
          </nav>
      </header>
      <main>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/ResponsiveAppBar' element={<ResponsiveAppBar />} /> */}
          {/* <Route path='/' element={<Navigate to='/Home' />} /> */}
          <Route path='/Home' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          {/* <Route path='/About' element={<About />} /> */}
          <Route path='/Quiz' element={<Quiz />} />

          {/* <Route path='/studybuddy' element={<Navigate to='/Home' />} /> */}
        </Routes>
      </main>
      <footer id="footer"></footer>
    </div>
  );
}

export default App;