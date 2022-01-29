// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:8080/api/v1/login', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
  return (
    <div className="App">
      <form className = 'Forms' onSubmit = {handleSubmit}>
        <h2>Grabit</h2>
        <label>Email : </label>
        <br/>
        <input type = 'email' onChange = {(e) => {
          setEmail(e.target.value)
        }}  value = {Email}></input>
        <br/>
        <label>Password : </label>
        <br/>
        <input type = 'password' onChange={(e) => {
            setPassword(e.target.value)
        }} value = {Password}></input>
        <br/>
        <button type = 'submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
