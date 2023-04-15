import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Cours from "./components/Cours"
import Contact from './components/Contact'
import Subjects from './components/Subjects'
import {Route,Routes } from 'react-router-dom'


function App() {

  return (
    <div className='h-screen'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/Cours" element={<Cours/>}></Route>
      <Route path="/cours/subjects" element={<Subjects />}></Route>

      <Route path="propos" element={<Cours/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
    </Routes>
    </div>
  )
}

export default App
