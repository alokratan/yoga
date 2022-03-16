import React,{useState} from 'react';
import {NavLink,Link} from 'react-router-dom';
function Nav() {
  const [menu, setmenu] = useState(false)
  return (
    <>

    <br />
    <div className="menu">
        <Link to="/" onClick={()=>setmenu(!menu)}>MENU
          </Link>
      </div>
        <div className="navbr">

    
    <div className={menu? "naveditmenu" :"navedit"}>
      <ul >
        <li>
          <NavLink className="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="active" to="/serv">Services</NavLink>
        </li>
        <li>
          <NavLink className="active" to="/news">News</NavLink>
        </li>
        <li>
          <NavLink className="active" to="/about">About</NavLink>
        </li>
      </ul>
      
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
      
  </div>

    </>
  )
}

export default Nav