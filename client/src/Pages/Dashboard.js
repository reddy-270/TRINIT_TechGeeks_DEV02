import React from 'react';
// import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import {useState} from 'react';
function Dashboard() {
    
  return (
      <div className="Dashboard">
        <div className='dashboard_body'>
          <div className='dashboard_body_side_bar'>
            <ul>
              <li>Dashboard</li>
              <li>Team Bugs</li>
              <li>Raise Bugs</li>
              <li>About me</li>
              <li>Change Password</li>
              <li>Sign Out</li>
            </ul>
          </div>
          <div className='dashboard_body_body'>

          </div>
        </div>
      </div>
  );
}

export default Dashboard;
