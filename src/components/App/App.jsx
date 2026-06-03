import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import About from '../About/About'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

function App() {

  return (
    <div className="app">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/search" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
