// App.js
import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Projects from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css'; 

const App = () => {
  return (
    <div className="app">
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;