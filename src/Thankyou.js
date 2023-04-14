import React from "react";
import JobPosting from "./components/JobPosting";
import {
    useNavigate 
  } from "react-router-dom";
const Thankyou=()=>{
   
    var userrole = localStorage.getItem('role');
    let navigate = useNavigate();
    const handlelinkclick = ()=>{
        navigate(`../../dashboard`);
      }

    return(
        <div className="thank-container">
             

             <div className="row">  <h1> Thank You </h1> </div>  
            <div className="row">
                <p>Please click on the below link to post a new job.</p>
                <div className="jobposting_link" onClick={handlelinkclick}>Job posting</div>
          </div>
        </div>
    )
}

export default Thankyou ;