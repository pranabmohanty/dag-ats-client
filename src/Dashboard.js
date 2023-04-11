import React from "react";
import JobPosting from "./components/JobPosting";
import JobListing from "./components/JobListing";

const Dashboard=()=>{
   
    var userrole = localStorage.getItem('role');
   
    return(
        <div>
             {userrole ? (
               
            userrole == 'recruiter' ? <JobPosting/> : <JobListing/>

            ) : (

                <div>Please Login to access this page.</div>
            )} 
        </div>
    )
}

export default Dashboard;