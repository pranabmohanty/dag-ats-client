import React from "react";
import Login from "./components/Login";
import Dashboard from "./Dashboard";

const Homepage=(props)=>{
    var userrole = localStorage.getItem('role');
   
    return(
        <div>
            {userrole ? (

                 <Dashboard/>
            
            ) : (

                <Login/>
            )}
        </div>
    )
}

export default Homepage;   