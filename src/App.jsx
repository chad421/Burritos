import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import LoginForm from './components/LoginForm.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="main-form">
        <Header />
        <LoginForm />
        <Footer />
      </section>
    </>
  )
}

export default App
