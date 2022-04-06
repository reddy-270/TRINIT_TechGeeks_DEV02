import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useHistory} from 'react-router-dom';
import './Login.css';

function Register() {

    const [username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Role, setRole] = useState('');
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = async (event) => {

        if (username.length < 4) {
            alert('Username must be at least 4 characters long');
            return;
        }

        if(Email.length < 4) {
            alert('Email must be at least 4 characters long');
            return;
        }

        if(Email.indexOf('@') === -1)  { alert('Email must contain @'); return;}
        if(Email.indexOf('.') === -1)  { alert('Email must contain .'); return;}

        if(Email.indexOf('@') > Email.indexOf('.'))  { alert('Email must contain @ before .'); return;}

        if(Email.indexOf('@') <=3)  { alert('Email must contain @ atleast after 3 characters'); return;}
        
        if (Password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        var count=0;
        event.preventDefault();
        const details = { Email, Password, username, Role };

        setIsPending(true);
        await fetch('https://61fe7c6ba58a4e00173c9880.mockapi.io/Register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details)
        }).then(() => {
          console.log('success');
          count++;
          // setIsPending(false);
        })
        .catch(err => {
          console.log(err);
          // setIsPending(false);
        })
        .finally(() => {
          count===1 ? history.push('/dashboard') : console.log('error');
        });
    }

    const fontstyle = {
        fontSize: '1.1rem',
    }

  return (
      <div className="Register">
        <form className = 'Forms' onSubmit = {handleSubmit}>
          <h2>Register Now!</h2>
          <input type = 'name' onChange = {(e) => {
            setUsername(e.target.value)
          }}  value = {username} placeholder='Name : ' style={fontstyle}></input>
          <br/>
          <input type = 'email' onChange = {(e) => {
            setEmail(e.target.value)
          }}  value = {Email} placeholder='Email : ' style={fontstyle}></input>
          <br/>
          <input type = 'password' onChange={(e) => {
              setPassword(e.target.value)
          }} value = {Password} placeholder='Password : ' style={fontstyle}></input>
          <br/>
          <h3>Select Role :</h3>
          <select  name="Role" value={Role} onChange={(e) => {setRole(e.target.value)}}>
            <option value="Head">Head</option>
            <option value="Manager">Manager</option>
            <option value="Sr. Engineer">Snr Engineer</option>
            <option value="Employee">Employee</option>
          </select>
          <br/>
          <button type = 'submit' style={fontstyle}>Register</button>
        </form>
      </div>
  );
}

export default Register;
