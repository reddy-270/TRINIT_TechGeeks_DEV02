import React from 'react';
import Itemlist from './itemlist';
import './sidebar.css';
function sidebar() {
  return <div className='sidebar'>
      <li style={{fontSize : '2rem'}}><Itemlist id = "1" link = {""} title = {"DeBugit"}/></li>
      <br/>
      <li><Itemlist id = "2" link = {"dashboard"} title = {"Dashboard"} /></li>
      <li><Itemlist id = "3" link = {"teambugs"} title = {"Team Bugs"} /></li>
      <li><Itemlist id = "4" link = {"raisebugs"} title = {"Raise Bugs"} /></li>
      <li><Itemlist id = "5" link = {"profile"} title = {"Profile"} /></li>
      <li><Itemlist id = "6" link = {"changepass"} title = {"Password"} /></li>
      <li><Itemlist id = "7" link = {"signout"}  title = {"Log Out"} /></li>
  </div>;
}

export default sidebar;
