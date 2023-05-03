import { useState } from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Footer from "./components/Layout/Footer"
import AnimatedRoutes from './components/Layout/AnimatedRoutes'


function App() {
  return (
    <div className='flex flex-col h-screen'>
    <Header/>
    <AnimatedRoutes/>
    <Footer/>
    </div>
  )
}

export default App
