import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { useNavigate }  from "react-router-dom";

import './index.css' ;
const JobListing=()=>{

  var currentuser = localStorage.getItem('username');


    const [jobList, setjobList] = useState([]);
    const [romList, setromList] = useState([]);
    const [currentRom, setcurrentRom] = useState("");

    let API_url = window.myGlobalVar ;
    let user = '' ;
      let navigate = useNavigate();
      
    useEffect(() => {
        fetch(`${API_url}joblisting/${currentuser}`)
          .then((jobresponse) => jobresponse.json())
          .then((jobdata) => setjobList(jobdata));
      }, []);

      useEffect(() => {
        fetch(API_url + "romlist")
          .then((response) => response.json())
          .then((data) => setromList(data));
      }, []);

      const handlerview = (jobid) => {
        navigate(`../../jobdetails/?id=${jobid}`);
      }
      const handleromchange = (event) => {
        
          fetch(`${API_url}romfilter/${event.target.value}`)
          .then(response => response.json())
          .then(data => {
            setjobList(data);
           })
          .catch(error => {
            console.log(error);
          });
    
      };

      const handleDownloadCSV = () => {
        Axios.get(`${API_url}downloadcsv/${currentuser}`)
          .then(response => {
            const blob = new Blob([response.data], {type: 'text/csv'});
            const downloadUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = 'job_record.csv';
            link.click();
            URL.revokeObjectURL(downloadUrl);
          })
          .catch(error => {
            console.error('Failed to download CSV:', error);
          });
      };

  //     {romList.map((item) => (
  //       item.rom == currentuser ?(
  //         user = currentuser 
          
  //       ) : (
  //         null
  //       )
  //  ))}

    return (
        <div className='container my-5 px-0'>
            <div className='jobList'>
                <div className='d-flex align-items-center justify-content-end mb-4'>
                <button className="csv_button" onClick={handleDownloadCSV}>
                   Download
                </button>
                    {currentuser == 'Kelsea' ? (
                    <select className="me-2"  onChange={handleromchange}>
                        <option value="all">Select ROM</option>
                        <option value="all">All</option>
                        {romList.map((item) => (
                        <option key={item.rom} value={item.rom}>{item.rom}</option>
                        ))}
                    </select>
                 ) : null}
                </div>
                {jobList ? (
                <table>
                    <tbody>
                <tr><th><div className="Job-Title">Job Title</div></th>
                <th><div className="Job-Title">Name of Office</div></th>
                <th><div className="Job-Title">Physical Address</div></th>
                <th><div className="Job-Title">ROM</div></th>
                {/* <th><div className="Job-Title">Request Date</div></th> */}
                <th><div className="Job-Title">Status</div></th>
                <th><div className="Job-Title">Details</div></th></tr>
                {jobList.map((data, index) =>
                    <>
                       <tr key={index}><td><div className="Job-info" key={index}>{data.jobtitle}</div></td>
                        <td><div className="Job-info" key={index}>{data.office}</div></td>
                        <td><div className="Job-info" key={index}>{data.address}</div></td>
                        <td><div className="Job-info" key={index}>{data.rom}</div></td>
                        {/* <td><div className="Job-info" key={index}>{data.request_date}</div></td> */}
                        <td><div className="Job-info" key={index}>{data.status}</div></td>
                       <td><div className="Job-info viewmore" key={index} onClick={() => handlerview(data.jobid)}>View More</div></td></tr>
                    </>
                )}
                </tbody>
                </table>
                ) : (
                  <div> <h1>No Result</h1> </div>
                )}
            </div>

        </div>
    )
}

export default JobListing;