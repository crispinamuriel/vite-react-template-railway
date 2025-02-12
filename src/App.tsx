import './App.scss'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="*" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
