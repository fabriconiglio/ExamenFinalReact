import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'



const Navbar = () => {

  const { dispatch , theme } = useContextGlobal()

  return (
    <nav  className="nav" id={theme.theme}>
      <div className="links-navbar">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
      </div>
      <button className="btn-theme" onClick={() => dispatch({ type: "theme" })}>
        Change theme
        </button>
    </nav>
  )
}

export default Navbar