import React from "react";
import JobPosting from "./components/JobPosting";

const Thankyou=()=>{
   
    var userrole = localStorage.getItem('role');
   
    return(
        <div className="thank-container">
             

                <h1> Thank You </h1>
          
        </div>
    )
}

export default Thankyou ;