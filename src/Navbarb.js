import React from 'react'
import {NavLink, Link} from 'react-router-dom';
function Navbarb() {
  return (
    <nav className="navbar navbar-expand-sm w-100 navbar-light navbarcs">
    <div className="container-fluid mx-2">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
       
        <h6>MENU</h6>
      </button>
      <div className="collapse navbar-collapse navitem" id="mynavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/"><h6>HOME</h6></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/serv"><h6>SERVICE</h6></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/news"><h6>NEWS</h6></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about"><h6>ABOUT</h6></NavLink>
          </li>
        </ul>
       
         </div>
    </div>
    <div className='navedit2 bg'>

    <ul >
        <li>
          <Link to="/"><i className="bi bi-facebook"></i></Link>
        </li>
        <li>  
          <Link to="/"><i className="bi bi-twitter"></i></Link>
        </li> 
        <li>  
          <Link to="/"><i className="bi bi-google"></i></Link>
        </li>
          <li>
          <Link to="/"><i className="bi bi-instagram"></i></Link>
        </li>
      </ul>

      </div>
  </nav>
  )
}

export default Navbarb