// import logo from './logo.svg';
import './Login.css';
import { useState } from 'react';
function Login() {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const details = { Email, Password };

        setIsPending(true);
        fetch('http://localhost:8080/api/login', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details)
        }).then(() => {
          console.log('success');
          setIsPending(false);
        })
    }
  return (
    <div className="Login">
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
      {isPending && <p>Loading...</p>}
    </div>
  );
}

export default Login;