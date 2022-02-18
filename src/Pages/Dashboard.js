import React, { useEffect } from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './Dashboard.css';
import Sidebar from './Sidebar_component/sidebar';
import Nav from './nav';
function Dashboard() {
    
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // fetching data using the get request
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/bugs/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(response =>{
      if(response.ok){
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      setData(data);
    })
    .catch(error => console.log(error.message))
    .finally(() => {
      setIsLoading(false);
    })

  }, []);
  return (

      <div className="Dashboard">
        <div className='dashboard_body'>
          <div className='dashboard_body_side_bar'>
            <Sidebar/>
          </div>
          <div className='dashboard_body_body'>
            <div>
              <Nav/>
              <br />
              <br/>
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
