import React from "react";
import JobPosting from "./components/JobPosting";

const Dashboard=()=>{
   
    var userrole = localStorage.getItem('role');
   
    return(
        <div>
             {userrole ? (

            <JobPosting/>

            ) : (

                <div>Please Login to access this page.</div>
            )} 
        </div>
    )
}

export default Dashboard;