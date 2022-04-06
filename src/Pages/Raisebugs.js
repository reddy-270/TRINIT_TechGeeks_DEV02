import React from 'react'
import {useState} from 'react';

import './Raisebugs.css'
import Sidebar from './Sidebar_component/sidebar'
import { useEffect } from 'react/cjs/react.production.min'
import Nav from './nav'
function Raisebugs() {

  const [data, setData] = useState([]);
  const [BugName, setBugName] = useState('');
  const [BugType, setBugType] = useState('');
  const [ThreatLevel, setThreatLevel] = useState('');
  const [BugDescription, setBugDescription] = useState('');
  
  const handleSubmit = (e) => {

    //PoST Request
    fetch('https://61fe7c6ba58a4e00173c9880.mockapi.io/Bugs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({
        name: e.name,
        description: e.description,
        createdAt: e.createdAt
      })

  } )
  }

  const submitButton = {
    backgroundColor: '#7627bb',
    color: 'white',
    padding : "8px 20px",
    border : "1px solid #7627bb",
    borderRadius : "5px",
    fontSize : "large",
    cursor : "pointer",

  }
  return (
    <div className='Raisebugs'>
        <div className='dashboard_body'>
          <div className='dashboard_body_side_bar'>
            <Sidebar/>
          </div>
          <div className='dashboard_body_body'>
            <div>
              <Nav/>
              <br />
            </div>
            <div className='raise_body'>
              <form onSubmit={ handleSubmit}>
                <div className='raise_entry'>
                  <p className='raise_text' style={{width : '200px',height :'50px'}}> Name of the bug : </p>
                  <input type='text' className='raise_input' onChange={ (e) => (setBugName(e.target.value))} value={BugName}/>
                </div>
                <div className='raise_entry'>
                  <p className='raise_text'>Type of the bug : </p>
                  <input type='text' className='raise_input' onChange={(e) => (setBugType(e.target.value))} value = {BugType}></input>
                </div>
                <div className='raise_entry'>
                  <p className='raise_text'>Threat level of the bug : </p>
                  <select style={{height : "30px", margin:"20px 30px", width:"100px"}}>
                    <option> Low</option>
                    <option>  Medium </option>
                    <option>  High </option>
                    <option> Critical</option>
                  </select>
                </div>
                <div className='raise_entry'>
                  <p className='raise_text'>Project Name that bug belongs : </p>
                  <input type='text' className='raise_input'></input>
                </div>
                <div className='raise_entry'>
                  <p className='raise_text'> Description :  </p>
                  <textarea className='raise_input_des'></textarea>
                </div>
                <button style={submitButton}> Raise Bug </button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}


export default Raisebugs;
