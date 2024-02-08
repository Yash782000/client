
import { useState } from "react";

import { NavLink, useNavigate} from 'react-router-dom'


function Signup() {
    const navigate = useNavigate();
    
    const [user,setUser] = useState({
        name:'',email:'',phone:'',work:'',password:'',cpassword:''
    })
    let name,value;
    const handleClick = (e) =>{
        value = e.target.value;
        name = e.target.name;
        setUser({...user,[name]:value})
    }
    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;
    
        try {
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, work, password, cpassword
                })
            });
    
            const data = await res.json();
    
            if (!data) {
                window.alert("Invalid data");
            } else {
                console.log("Data saved successfully");
                navigate("/login");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            // Handle fetch error (e.g., display error message to the user)
        }
    };
    
  return (
    <>
    <div className="outerMost">
        
    <div className="outer">
      <h1>Sign Up</h1>
      <form method="POST">

        <div className='inner'>
            <label htmlFor='name'><i class="zmdi zmdi-account-box"></i></label>
            <input type="text" name="name" value={user.name} onChange={handleClick} id="name" autoComplete='off' placeholder='Your Name'/>
        </div>
        <div className='inner'>
            <label htmlFor='email'><i class="zmdi zmdi-email"></i></label>
            <input type="text" name="email" value={user.email} onChange={handleClick} id="email" autoComplete='off' placeholder='Your Email'/>
        </div>
        <div className='inner'>
            <label htmlFor='phone'><i class="zmdi zmdi-phone"></i></label>
            <input type="text" name="phone" value={user.phone} onChange={handleClick}id="phone" autoComplete='off' placeholder='Mobile Number'/>
        </div>
        <div className='inner'>
            <label htmlFor='work'><i class="zmdi zmdi-comment-alt"></i></label>
            <input type="text" name="work" value={user.work} onChange={handleClick} id="profession" autoComplete='off' placeholder='Your Profession'/>
        </div>
        <div className='inner'>
            <label htmlFor='password'><i class="zmdi zmdi-lock-outline"></i></label>
            <input type="text" name="password" value={user.password} onChange={handleClick} id="password" autoComplete='off' placeholder='Your Password'/>
        </div>
        <div className='inner'>
            <label htmlFor='cpassword'><i class="zmdi zmdi-lock"></i></label>
            <input type="text" name="cpassword"value={user.cpassword} onChange={handleClick} id="cpassword" autoComplete='off' placeholder='Your Confirm Password'/>
        </div>
        <div className="inner submit">
         <input className="button-28" type="submit" name="signup" id="signup" onClick={PostData} value="Register"/>
        </div>
         
        </form>
    </div>
    <div className="sendToLogin">
       
            <NavLink className="link" to="/login">I am already Register</NavLink>
        
    </div>
 </div> 
  
    </>
  )
}

export default Signup