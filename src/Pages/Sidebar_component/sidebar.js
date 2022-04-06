import React from 'react';
import { NavLink } from 'react-router-dom';
import Itemlist from './itemlist';

import { FaBug } from "react-icons/fa";
import './sidebar.css';
function sidebar() {
  return <div className='sidebar'>
      <div className="title" style={{marginTop:'30px', color : "#4e3c5d"}}>
        <NavLink to="/dashboard">
          <span className='icon'> <FaBug/></span>
          <br />
          <span className='itemlist_text'> DeBugit </span>
        </NavLink>
      </div>
      <br/>
      <br></br>
      <div style={{margin : '40px 0px'}}>
        <Itemlist id = "1" link = {"dashboard"} title = {"Dashboard"} />
        <Itemlist id = "2" link = {"teambugs"} title = {"Team Bugs"} />
        <Itemlist id = "3" link = {"raisebugs"} title = {"Raise Bugs"} />
        <Itemlist id = "4" link = {"profile"} title = {"Profile"} />
        <Itemlist id = "5" link = {"changepass"} title = {"Password"} />
        <Itemlist id = "6" link = {"signout"}  title = {"Log Out"} />
      </div>
      
  </div>;
}

export default sidebar;
