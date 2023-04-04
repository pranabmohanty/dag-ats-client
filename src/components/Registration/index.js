import React from "react";
import Dashboard from "../../Dashboard";
 
const Registration=(props)=>{
  var userrole = localStorage.getItem('role');
      const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        
        fetch('http://localhost:8888/dag-ats/registration.php', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      }

    return(
        <div className="main-box">
           {userrole ? (

<Dashboard/>

) : (
            <form onSubmit={handleSubmit}>
            <div className="row">
                 <div className="col-md-12 text-center"><h1>Register</h1></div>
            </div>
            <div className="row">
                <div className="col-md-6">First Name</div>
                <div className="col-md-6">
                <input type="text" name="first_name" placeholder="First Name" className="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Last Name</div>
                <div className="col-md-6">
                <input type="text" name="last_name"  placeholder="Last Name"  className="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">
                  <input type="text" name="email"     placeholder="Email" className="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Role</div>
                <div className="col-md-6">
                <select name="role">
                  <option value="">Select Role</option>
                  <option value="office_manager">Office Manager</option>
                  <option value="rom">ROM</option>
                  <option value="recruiter">Recruiter</option>
                </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Password</div>
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
)}
        </div>
    )
}

export default Registration;