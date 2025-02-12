import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbar" className="row">
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar