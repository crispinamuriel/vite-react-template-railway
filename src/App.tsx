import './App.scss'
import { Link, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Navbar from './Navbar'



function App() {
  return (
    <>
      <div id="main">
          <div className="column container">
            <div id="header">
              <Link to="/">
                <h1 className="title">Crispina R. Muriel</h1>
              </Link>
            </div>
            <Navbar />
          </div>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
