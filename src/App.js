import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



const App = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
 
  const handleClick = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);

    if (isValid) {
      console.log("Valid email:", email);
      setDone(true);

      await fetch('http://localhost:8000/', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({email}),
    }).then((res)=>{console.log(res);})
    .catch((error)=>{console.log(error);})

    } else {
      console.log("Invalid email:", email);
    }
  };



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="App">
      <div className="container">
        <div className='navbar'>
          <div className='navleft'>
            <a href='/'>
              <img src='https://assets.website-files.com/640db57e5194b06ee58b0252/64302b4f972169524a89a881_1-p-500.png' alt=''></img>
              Workplete
            </a>
          </div>
        </div>
      </div>
      <div className='body'>
        <div className='container'>
          <div className='box1'>

            <div className='headbox'>
              <div className='heading'>Autocomplete For Everything</div>
            </div>
            <div className='desc'>We automatically create workflow automations to improve worker efficiency.</div>
            {
              !done && <>
                <input
                  className={`emailinput ${isValidEmail ? '' : 'invalid'}`}
                  placeholder='Email Address'
                  value={email}
                  onChange={handleEmailChange}
                />
                {!isValidEmail && <div className="errormsg">Invalid email address</div>}
                <div className='signupbtn' onClick={handleClick}>Sign Up For Waitlist</div>
              </>
            }
            {
              done && <div className='thanksbox'>
                <div className='thankstext'>
                Thank you! Your submission has been received!
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      <div className='lowwer'>
        <div className='lowleft'>
          <div className='lefthead'>How it works</div>
          <div className='leftdesc'>Workplete is a multi-functional tool that uses Ai to allow you to control your computer with just your voice.</div>
          <div className='leftbtn'>
          <button class="custom-btn btn-5"><span>Read More</span></button>
          </div>
        </div>
        <div className='lowmid'>
          <img src='https://assets.website-files.com/640db57e5194b06ee58b0252/640db57e5194b0539a8b0296_Capture2-p-800.png'alt=''></img>
        </div>
        <div className='lowright'>
          <div className='righthead'>Monitoring</div>
          <div className='rightdesc'>Our AI-powered tool also automatically builds RPA automations based on a user's workflow.</div>
          <div className='rightbtn'>"Auto-complete for text is one thing, but for general work, its like magic."
            <div>- Jack, Founder / CEO</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;