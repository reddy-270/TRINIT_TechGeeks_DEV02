import React from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './Dashboard.css';
import Sidebar from './Sidebar_component/sidebar';
function Dashboard() {
    
  return (
      <div className="Dashboard">
        <div className='dashboard_body'>
          <div className='dashboard_body_side_bar'>
            <Sidebar/>
          </div>
          <div className='dashboard_body_body'>
            <div>

            </div>
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
