import React, { useEffect } from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './Dashboard.css';
import Sidebar from './Sidebar_component/sidebar';
import Nav from './nav';
import DashboardBugCard from './DashboardBugCard';
function Dashboard() {
    
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // fetching data using the get request
  useEffect(() => {
    fetch('https://61fe7c6ba58a4e00173c9880.mockapi.io/Bugs', {
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

  console.log(data);
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
              <br />
            </div>
            <div>
              <h1>Pending Bugs</h1>
              <div className='dashboard_cards'>
                <DashboardBugCard name = {'1'} description = {'description : 1'} createdAt = {'20-02-2022'}/>
                <DashboardBugCard name = {'1'} description = {'description : 1'} createdAt = {'20-02-2022'}/>
                <DashboardBugCard name = {'1'} description = {'description : 1'} createdAt = {'20-02-2022'}/>
              </div>
            </div>
            <div>
              <h1>Resolved Bugs</h1>
              <div className='dashboard_cards'>
                <DashboardBugCard name = {'1'} description = {'description : 1'} createdAt = {'20-02-2022'}/>
                <DashboardBugCard name = {'1'} description = {'description : 1'} createdAt = {'20-02-2022'}/>
                <DashboardBugCard name = {'1'} description = {'description : 1'} createdAt = {'20-02-2022'}/>

              </div>
            </div>
            <div>
              <h1>Resolved Bugs</h1>
              <div className='dashboard_cards'>
                <DashboardBugCard name = {'1'} description = {'description : 1'} createdAt = {'20-02-2022'}/>
                <DashboardBugCard name = {'1'} description = {'description : 1'} createdAt = {'20-02-2022'}/>
                <DashboardBugCard name = {'1'} description = {'description : 1'} createdAt = {'20-02-2022'}/>

              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
