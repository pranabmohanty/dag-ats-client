import React from "react";
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
import {
    useNavigate 
  } from "react-router-dom";

//import Dashboard from "../../Dashboard";
const Login=(props)=>{
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        
        fetch('http://localhost:8888/dag-ats/userlogin.php', {
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
                  <input type="text" name="email" placeholder="Email" className="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                <input type="password" name="password" placeholder="Password"  className="form-control" />
                </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-cener">
                 <button type="submit">Submit</button>
              </div>
            </div>
            </form>
            <div className="create-account">
                <Link to="/register"  class="nav-link active">Create an account</Link>
            </div>
        </div>
    )
}

export default Login;