
import React from 'react';
import Register from './Register';
import './Home.css';

import { useHistory } from 'react-router-dom';

import GoogleLogin from 'react-google-login';
function Home() {

    const history = useHistory();
    const GoogleSuccess = (response) => {
        const Email = response.profileObj.email;
        const name = response.profileObj.name;
        const token = response.tokenId;
        const details = { Email };

        fetch('https://61fe7c6ba58a4e00173c9880.mockapi.io/Register', {
            headers: {  'Content-Type': 'application/json' },
            // body: JSON.stringify(details)
        }).then((response) => {
            console.log(response);
            console.log('success');
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            history.push('/dashboard');
        });

        console.log(Email, name);

    };

    const GoogleFailure = (response) => {
        console.log(response);
    };
  return (
            <div className='Home'>
                <div className='Home_left'>
                    <h1 className='debugit_heading'>DeBugit</h1>
                    <iframe  src="https://giphy.com/embed/tSti2Eqe5j1Di" className='Bug'/>
                    <div className='google_button' style={{margin: '30px'}}>
                        <GoogleLogin
                        clientId='5955430790-3jcb9rn592t5n181umvm5gojdadv0b0c.apps.googleusercontent.com'
                        buttonText='Login with google'
                        onSuccess={GoogleSuccess}
                        onFailure={GoogleFailure}
                        cookiePolicy={'single_host_origin'}
                        />
                    </div>
                    <h2>Haven't registered yet ?</h2>
                </div>
                <div className='Home_right'>
                    <Register />
                </div>
            </div>
  );
}

export default Home;