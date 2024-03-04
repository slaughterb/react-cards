import React, { useState } from 'react';
import CardList from './Components/CardList/CardList';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import axios from 'axios';

function App() {

  return (
    <div className="app-container">
      <Header />
    </div>
  );
}

export default App;