import React from 'react';
import { NavLink } from 'react-router-dom';
import Itemlist from './itemlist';

import { FaBug } from "react-icons/fa";
import './sidebar.css';
function sidebar() {
  return <div className='sidebar'>
      <div className="title">
        <NavLink to="/dashboard">
          <span className='icon'> <FaBug/></span>
          <br />
          <span className='text'> DeBugit </span>
        </NavLink>
      </div>
      <br/>
      <br></br>
      <Itemlist id = "1" link = {"dashboard"} title = {"Dashboard"} />
      <Itemlist id = "2" link = {"teambugs"} title = {"Team Bugs"} />
      <Itemlist id = "3" link = {"raisebugs"} title = {"Raise Bugs"} />
      <Itemlist id = "4" link = {"profile"} title = {"Profile"} />
      <Itemlist id = "5" link = {"changepass"} title = {"Password"} />
      <Itemlist id = "6" link = {"signout"}  title = {"Log Out"} />
  </div>;
}

export default sidebar;
