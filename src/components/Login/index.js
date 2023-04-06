import React, { useState } from "react";
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
import {
    useNavigate 
  } from "react-router-dom";

//import Dashboard from "../../Dashboard";
const Login=(props)=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  let API_url = window.myGlobalVar ;
  console.log(API_url);
    let navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform form validation
    let errors = {};

   
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.trim().length < 8) {
      errors.password = "Password should be at least 8 characters";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
        
        const form = event.target;
        const formData = new FormData(form);
        
        fetch(API_url + 'userlogin', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === '200'){
                window.localStorage.setItem('role', data.role);
                navigate(`../../Dashboard`);
            }else  {
                alert('Invalid User'); 
             }
        })
        .catch(error => console.error(error));
      }

    return(
        <div className="main-box">
            <form onSubmit={handleSubmit}>
            <div className="row">
         <div className="col-md-12 text-center"><h1>Login</h1></div>
        </div>
            <div className="row">
                <div className="col-md-6">
                  <input type="text" name="email" placeholder="Email" className="form-control" 
                  onChange={(event) => setEmail(event.target.value)} />
                  {errors.email && <div className="error">{errors.email}</div>}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                <input type="password" name="password" placeholder="Password"  className="form-control"
                 onChange={(event) => setPassword(event.target.value)} />
                 {errors.password && <div className="error">{errors.password}</div>}
                </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-cener">
                 <button type="submit">Submit</button>
              </div>
            </div>
            </form>
            <div className="create-account">
                <Link to="/register"  className="nav-link active">Create an account</Link>
            </div>
        </div>
    )
}

export default Login;