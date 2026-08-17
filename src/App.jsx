import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import LoginSignup from './components/LoginSignup.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <div>
        <Header />
       <LoginSignup />
       <Footer />
      </div>
    </>
  )
}

export default App
