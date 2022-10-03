import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import { Form, Alert } from "react-bootstrap";
import { useUserAuth } from "../../components/context/UserAuthContext";
import 'react-phone-number-input/style.css'




import './Auth.css'
import icon from '../../assests/icon.png'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'


const Auth = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [number, setNumber] = useState('')
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const [error, setError] = useState("");
  const [isOtpVerified,setisOtpVerified]=useState("false")








  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email && !password && !number  ) {
      return alert("Please fill up all the credentials");
    }
    if(isOtpVerified){
      return alert('Please verify your otp first')
    }else{
      dispatch(signup({ name, email, password , number}, navigate))
    } 
    if (isSignup ) {
      if (!number  ) {
        return alert("Please fill up the number and verify your number");
      
      }
      dispatch(signup({ name, email, password , number}, navigate))
    } else {
      dispatch(login({ email, password }, navigate))
    }
   
    if (isSignup) {
      if (!name) {
        return alert("Please fill up all the credentials");
      
      }
      
      dispatch(signup({ name, email, password , number}, navigate))
    } else {
      dispatch(login({ email, password }, navigate))
    }
    
     
  }


  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return alert("Please  first verify your phone number by entering a valid phone number");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
      return alert('OTP SENT SUCCESSFULLY')
    } catch (err) {
      return alert("ERROR 404");
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) 
    return alert ('Please fill up the OTP');
    try {
      if(isOtpVerified){
        dispatch(signup({ name, email, password , number}, navigate))    
        }
      await result.confirm(otp);
      return alert ('OTP VERIFIED SUCCESSFULLY ');
       
      
    } catch (err) {
      return alert ('OOPS YOUR OTP IS WRONG OR HAS BEEN EXPIRED ');
    }
  };



  return (
    
    
    
    
    
    
    
    
    

    <section className='auth-section'>
      {isSignup && <AboutAuth />}
      <div className='auth-container-2'>
        {!isSignup && <img src={icon} alt='stack overflow' className='login-logo' />}
        <form > 
          

          {
            isSignup && (
              <label htmlFor='name'>
                <h4>
                  Display Name
                </h4>
                <input type='text' id='name' name='name' onChange={(e) => { setName(e.target.value) }} />
              </label>
            )


          }
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
          </label>
          <label htmlFor="password">
            <div style={{ diplay: "flex", justifyContent: "space-between" }} >
              <h4>Password</h4>
              {!isSignup && <p style={{ color: "#007ac6", fontSize: "12px" }}>forgot password?</p>}
            </div>
            <input type="password" name='password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
            {isSignup && <p style={{ color: "#666767", fontSize: "13px" }}>Password must contain at least eight<br /> characters, including at least 1 letter and 1 number</p>}
          </label>
          {
            isSignup && (
              <>
                <label style={{ display: !flag ? "block" : "none" }} >
                  <h4>
                    Phone Number
                  </h4>
                  <PhoneInput
                    defaultCountry="IN"
                    value={number}
                    onChange={setNumber}
                    
                    className='phoneinput'
                  
                  />
                  <div id="recaptcha-container"></div>
                &nbsp;<button onClick={getOtp} className='auth-btn2' >Get OTP</button>
                   {isSignup && <p style={{ color: "#666767", fontSize: "13px" }}>You will receive a OTP in your phone number <br />for verification</p>}
                </label>
                

                <label style={{ display: flag ? "block" : "none" }} className="qwerty">
                <p style={{ color: "red", fontSize: "14px" }}>An OTP has been sent to your entered phone number.</p>
                  <Form.Control
                    type="otp"
                    placeholder="Enter OTP "
                    onChange={(e) => setOtp(e.target.value)}
                  />


                  



                </label>
              </>
            )}
           {
                        isSignup && (
                            <div htmlFor='check' className='plzz'> 
                                <input type="checkbox" className='plz'/>&nbsp;&nbsp;&nbsp;
                                <p style={{ fontSize:"13px" }}>Opt-in to receive occasional,<br />product updates, user research invitations,<br />company announcements, and digests.</p>
                            </div>
                        )
                    }


          

          <button  onClick={handleSubmit && verifyOtp} type='submit' className='auth-btn'>{isSignup ? 'Signup' : 'Log in'}
          </button>
          {
            isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                By clicking "Signup",you agree to our
                <span style={{ color: "#007ac6" }}> terms of<br /> service</span>,
                <span style={{ color: "#007ac6" }}>privacy policy</span> and
                <span style={{ color: "#007ac6" }}> cookie policy</span>.
              </p>
            )
          }<br />


        </form>



        <p style={{  fontSize: "13px" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{isSignup ? 'Already have an account?' : "Don't have an account?"}
          <button type="button" className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : 'Sign up here'}</button> <br />
          <p  style={{ color: "black", fontSize: "15px" }} > Are you an employer? <span style={{ color: "#009dff" }}>Sign up on Talent</span>  </p>
        </p>
        
       

      </div>
    </section>
  )
}
export default Auth
