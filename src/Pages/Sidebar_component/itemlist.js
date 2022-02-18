import React from 'react';
import { NavLink } from 'react-router-dom';
import './itemlist.css';
import {IoIosBug} from 'react-icons/io';
import {MdSpaceDashboard} from 'react-icons/md';
import {RiTeamFill} from 'react-icons/ri';
import {GiRaiseZombie} from 'react-icons/gi';
import {CgProfile} from 'react-icons/cg';
import {RiLockPasswordFill} from 'react-icons/ri';
import {FaSignOutAlt} from 'react-icons/fa';

export default function item_list(props) {
  
    const style = {
        fontSize : '1.5rem',
        fontWeight : '500',
        color:"white",
        textDecoration: 'none',
        
      }
  return (
    <div className='itemlist' style={{display : 'flex'}}>
            <NavLink to={`/${props.link}`} style={style} className = "Navlink" activeClassName='navlink_active'>
              <b></b>
              <b></b>
              <li>
                {
                  props.id === "1" ? <span className='itemlist_icon' > <MdSpaceDashboard/></span> :
                  props.id === "2" ? <span className='itemlist_icon' > <RiTeamFill/></span> :
                  props.id === "3" ? <span className='itemlist_icon' > <GiRaiseZombie/></span> :
                  props.id === "4" ? <span className='itemlist_icon' > <CgProfile/></span> :
                  props.id === "5" ? <span className='itemlist_icon' > <RiLockPasswordFill/></span> :
                  props.id === "6" ? <span className='itemlist_icon' > <FaSignOutAlt/></span> :
                  <span className='itemlist_icon' > <FaSignOutAlt/></span>
                }
                <span className='itemlist_text'> {props.title} </span>
              </li>
            </NavLink>
    </div>
  )
}
