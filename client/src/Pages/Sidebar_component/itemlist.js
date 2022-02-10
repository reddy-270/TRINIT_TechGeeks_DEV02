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
      const style1 = {
        fontSize : '1.5rem',
        paddingTop : '10px',
        margin: '10px',
      }
  return (
    <div className='itemlist' style={{display : 'flex'}}>
            <NavLink to={`/${props.link}`} style={style} className = "Navlink" activeClassName='navlink_active'>
              <li>
                {
                  props.id === "1" ? <span className='icon' style={style1}> <MdSpaceDashboard/></span> :
                  props.id === "2" ? <span className='icon' style={style1}> <RiTeamFill/></span> :
                  props.id === "3" ? <span className='icon' style={style1}> <GiRaiseZombie/></span> :
                  props.id === "4" ? <span className='icon' style={style1}> <CgProfile/></span> :
                  props.id === "5" ? <span className='icon' style={style1}> <RiLockPasswordFill/></span> :
                  props.id === "6" ? <span className='icon' style={style1}> <FaSignOutAlt/></span> :
                  <span className='icon' style={style1}> <FaSignOutAlt/></span>
                }
                <span className='text'> {props.title} </span>
              </li>
            </NavLink>
    </div>
  )
}
