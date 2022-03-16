import React from "react";
import {NavLink} from 'react-router-dom';
function Header() {
  return (
    <>

    <div className="head">

        <NavLink to="/"><i className="bi text-danger bi-geo-alt-fill"><span>4600 International Gateway, Columbus, OH 43219, USA</span></i> </NavLink>
        <NavLink to="/"><i className="bi text-danger bi-phone-fill"><span>+(321)654-0789</span></i> </NavLink>
        <NavLink to="/"><i className="bi  text-danger bi-envelope-fill"><span>radcliffe2@gmail.com</span></i> </NavLink>
        <NavLink to="/"><i className="bi text-danger bi-clock-fill"><span>Mon-Sat: 9am-6pm</span></i> </NavLink>
    </div>
    <hr />
    <div className="weblogo">
        <div className="weblogoimg"></div>
        <div className="weblogotxt"><h3>Radcliffe 2</h3></div>
    </div>

    </>
  )
}

export default Header