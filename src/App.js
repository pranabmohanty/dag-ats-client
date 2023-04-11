import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Homepage from './Homepage';
import Registration from './components/Registration';
import Login from './components/Login';
import JobPosting from './components/JobPosting';
import Header from './Header';
import Thankyou from './Thankyou' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'; 
function App() {
  return (
     <Router>
  <div className='container'>
  <Header/>
      <Routes>
         <Route path="/" element={<Homepage/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Registration/>} /> 
         <Route path="/dashboard" element={<Dashboard/>} />
         <Route path="/thank-you" element={<Thankyou/>} />
      </Routes> 
      

  </div>
  </Router>
  );
}

export default App;
