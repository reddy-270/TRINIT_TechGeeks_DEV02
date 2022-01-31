
import React from 'react';
import Register from './Register';
import './Home.css';

import GoogleLogin from 'react-google-login';
function Home() {

  return (
            <div className='Home'>
                <div className='Home_left'>
                    <h1 className='debugit_heading'>DeBugit</h1>
                    <iframe  src="https://giphy.com/embed/tSti2Eqe5j1Di" className='Bug'/>
                    <div className='google_button' style={{margin: '30px'}}>
                        <GoogleLogin
                        clientId='5955430790-3jcb9rn592t5n181umvm5gojdadv0b0c.apps.googleusercontent.com'
                        buttonText='Login with google'
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