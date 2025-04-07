import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Home from "./components/pages/Home.jsx"
import About from "./components/pages/About.jsx"
import Projects from "./components/pages/Projects.jsx"
import Contact from "./components/pages/Contact.jsx"
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
