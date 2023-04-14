import React, { useState } from "react";
import Dashboard from "../../Dashboard";
import {
  useNavigate 
} from "react-router-dom";
const Registration=(props)=>{
  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  let API_url = window.myGlobalVar ;
  let navigate = useNavigate();
  var userrole = localStorage.getItem('role');
      const handleSubmit = (event) => {
        event.preventDefault();
        let errors = {};
        if (!firstName.trim()) {
          errors.firstName = "First Name is required";
        }

        if (!lastName.trim()) {
          errors.lastName = "Last Name is required";
        }

        // if (!role.trim()) {
        //   errors.role = "Role is required";
        // }

        if (!password.trim()) {
          errors.password = "Password is required";
        } else if (password.trim().length < 8) {
          errors.password = "Password should be at least 8 characters";
        }

        if (!email.trim()) {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = "Email is invalid";
        }
        
        if (Object.keys(errors).length > 0) {
          setErrors(errors);
          return;
        }
        const form = event.target;
        const formData = new FormData(form);
        
        fetch(API_url + 'registration', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data.status);
          if(data.status === '200'){
              navigate(`../../login`);
          }
      })
      .catch(error => console.error(error));
      }

      const handlechange = event => {
        setErrors({});
        if (event.target.name == "first_name") setFirstName(event.target.value);
        if (event.target.name == "last_name") setLastName(event.target.value);
        if (event.target.name == "email") setEmail(event.target.value);
        // if (event.target.name == "role") setRole(event.target.value);
        if (event.target.name == "password") setPassword(event.target.value);
      }

    return(
        <div className="main-box">
           {userrole ? (

<Dashboard/>

) : (
          <form onSubmit={handleSubmit}>
          <div className="row">
              <div className="col-md-12 text-center"><h1>Recruiter Register</h1></div>
          </div>
          <div className="row">
              <div className="col-md-6">First Name</div>
              <div className="col-md-6">
              <input type="text" name="first_name" placeholder="First Name" className="form-control" 
              onChange={(event) => handlechange(event) }/>
                {errors.firstName && <div className="error">{errors.firstName}</div>}
              </div>
          </div>
          <div className="row">
              <div className="col-md-6">Last Name</div>
              <div className="col-md-6">
              <input type="text" name="last_name"  placeholder="Last Name"  className="form-control"
              onChange={(event) => handlechange(event) }/>
                {errors.lastName && <div className="error">{errors.lastName}</div>}
              </div>
          </div>
          <div className="row">
              <div className="col-md-6">Email</div>
              <div className="col-md-6">
                <input type="text" name="email"  placeholder="Email" className="form-control" 
                onChange={(event) => setEmail(event.target.value)}/>
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
          </div>
          {/* <div className="row">
              <div className="col-md-6">Role</div>
              <div className="col-md-6">
              <select name="role"  onChange={(event) => handlechange(event)}>
                <option value="">Select Role</option>
                <option value="rom">ROM</option>
                <option value="recruiter">Recruiter</option>
              </select>
              {errors.role && <div className="error">{errors.role}</div>}
              </div>
          </div> */}
          <input type="hidden" name="role" value="recruiter" />
          <div className="row">
              <div className="col-md-6">Password</div>
              <div className="col-md-6">
              <input type="password" name="password" placeholder="Password"  className="form-control" 
              onChange={(event) => handlechange(event)}/>
              {errors.password && <div className="error">{errors.password}</div>}
              </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-cener">
              <button type="submit">Submit</button>
            </div>
          </div>
          </form>
)}
        </div>
    )
}

export default Registration;