import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './Dashboard.css';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import HomeIcon from '@mui/icons-material/Home';
function Dashboard() {
    
    const style = {
      fontSize : '2rem',
      fontWeight : 'bold',
    }

  return (
      <div className="Dashboard">
        <div className='dashboard_body'>
          <div className='dashboard_body_side_bar'>
            <ul>
              <li>
                <Link to="/dashboard" style={style}>
                  <span className='icon'> <FontAwesomeIcon icon={["fas", "bug"]} /></span>
                  DeBugit
                </Link></li>
              <br/>
              <li><Link to="/dashboard" >Dashboard</Link></li>
              <li><Link to="/Teambugs">Team Bugs</Link></li>
              <li><Link to="/Raisebugs">Raise Bugs</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/Password">Change Password</Link></li>
              <li><Link to="/signout">Sign Out</Link></li>
            </ul>
          </div>
          <div className='dashboard_body_body'>
            <div>
              <h1>Pending Bugs</h1>
              <div className='dashboard_cards'>
                <div className='card'>
                  <h2>Bug : 1</h2>
                  <p>Description : This is Bug 1 from Web dev</p>
                </div>
                <div className='card'>
                  <h2>Bug : 2</h2>
                  <p>Description : This is Bug 1 from Web dev</p>
                </div>
                <div className='card'>
                  <h2>Bug : 3</h2>
                  <p>Description : This is Bug 1 from Web dev</p>
                </div>
              </div>
            </div>
            <div>
              <h1>Resolved Bugs</h1>
              <div className='dashboard_cards'>
                <div className='card'>
                  <h2>Bug : 1</h2>
                  <p>Description : This is Bug 1 from Web dev</p>
                </div>
                <div className='card'>
                  <h2>Bug : 2</h2>
                  <p>Description : This is Bug 1 from Web dev</p>
                </div>
                <div className='card'>
                  <h2>Bug : 3</h2>
                  <p>Description : This is Bug 1 from Web dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
