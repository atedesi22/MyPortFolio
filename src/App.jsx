import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Expertise from './pages/Expertise'
import Header from './components/Header'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Challenges from './pages/Challenge'
// import Footer from './components/Footer'


function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Header/>
        <Expertise/>
        <Challenges/>
        <footer className='bg-slate-950 py-20 border-t border-slate-800'>
          <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16'>
            
            <Contact id='contact'/>
            <Shop id='shop'/>
          </div>

          <div className="mt-20 text-center text-gray-600 text-sm">
              © 2026 Atedesi Bohole Paul Emmanuel. Built on Ubuntu.
          </div>  
        </footer>
        {/* <Footer/> */}
      </div>
    </>
  )
}

export default App