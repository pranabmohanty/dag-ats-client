import React from "react";
import {BrowserRouter as Router, Routes,Route,Link,useNavigate } from 'react-router-dom';

const Header=()=>{
    let userrole = localStorage.getItem('role');
    let navigate = useNavigate();
   const LogOut = ()=>{
    localStorage.removeItem('email');
    localStorage.clear();
    navigate(`/login`);
  }
    return(
        <nav className="navbar navbar-expand-lg">
        <span className="navbar-text">

             {userrole ? (<Link to='' onClick={LogOut}>LogOut</Link> ) : null } 
            
            </span>
      
        </nav>
    )
}

export default Header;