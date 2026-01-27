import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Expertise from './pages/Expertise'
import Header from './components/Header'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Header/>
        <Expertise/>
      </div>
    </>
  )
}

export default App