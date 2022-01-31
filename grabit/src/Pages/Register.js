import React, {useState} from 'react';
// import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './Login.css';

function Register() {

    const [username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const details = { Email, Password };

        setIsPending(true);
        fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details)
        }).then(() => {
          console.log('success');
          setIsPending(false);
        })
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
          <select  name="Role">
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
