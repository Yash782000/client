import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleLogin = async (e)=>{
     e.preventDefault();
     console.log(email,password)
     const res =await fetch("/signin",{
      method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
     })
     
     const data =await res.json();
     console.log(data);
     if(!data || res.status === 400){
      window.alert("Invalid Credentials");
     }else{
        console.log("data saved ")
        navigate("/");
     }
  }
  return (
     <>
      <div className="outerMost">
        <div className="sendToRegister">
           
           <NavLink className="link" to="/signup">Create an Account</NavLink>
       
        </div>
        
        <div className="outer outer12">
          <h1>Sign In</h1>
          <form method="POST">
    
            
            <div className='inner'>
                <label htmlFor='email'><i class="zmdi zmdi-email"></i></label>
                <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}id="email" autoComplete='off' placeholder='Your Email'/>
            </div>
          
            
            <div className='inner'>
                <label htmlFor='password'><i class="zmdi zmdi-lock-outline"></i></label>
                <input type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" autoComplete='off' placeholder='Your Password'/>
            </div>
            
            <div className="inner submit">
             <input className="button-28" onClick={handleLogin} type="submit" name="signin" id="signin" value="Login"/>
            </div>
             
            </form>
        </div>
       
     </div>
     </>
  )
}

export default Login