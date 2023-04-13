import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css' ;

const JobDetails = () => {

  const [jobDetail, setjobDetail] = useState([]);

  var userrole = localStorage.getItem('role');

  let navigate = useNavigate();

  let API_url = window.myGlobalVar ;
 
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const jobid = params.get('id');

  useEffect(() => {
    fetch(`${API_url}jobdetails/${jobid}`)
      .then((jobresponse) => jobresponse.json())
      .then((jobdata) => setjobDetail(jobdata));
  }, []);

  const handlerjobstatus = (event) => {
    
    fetch(`${API_url}jobapprove/${jobid}/${event}`)
    .then(response => response.json())
    .then(data => {
      if(data.status === '200'){
         alert('Thank You');
         navigate(`../../Dashboard`);
        }else  {
            alert('Please try again'); 
        }
       })
    .catch(error => {
      console.log(error);
    });
  }

  return(
    <div className="jobDetails-outer my-5 p-5">
      {userrole == 'rom' ? (
    <div className="jobDetails my-5 p-5">
    <div className="row">
      <div className="col-sm-6">
        <div>
        <div className="Job-Title">Job Title</div>
        <div className="job-Data">{jobDetail.jobtitle}</div>
        </div>
        </div>

      <div className="col-sm-6">
      <div>
        <div className="Job-Title">Name of Office</div>
        <div className="job-Data">{jobDetail.office}</div>           
        </div>
      </div>

      <div className="col-sm-12">
      <div>
      <div className="Job-Title">Physical Address</div>
        <div className="job-Data">{jobDetail.address}</div>  
        </div>
      </div>

      <div className="col-sm-6">
      <div>
      <div className="Job-Title">ROM</div>
        <div className="job-Data">{jobDetail.rom}</div> 
        </div>
      </div>

      <div className="col-sm-6">
      <div>
        <div className="Job-Title">Date Requested</div>
        <div className="job-Data">{jobDetail.request_date}</div>
        </div>
      </div>

      <div className="col-sm-6">
      <div>
        <div className="Job-Title">Required Experience</div>
        <div className="job-Data">{jobDetail.experience}</div>
        </div>
      </div>

      <div className="col-sm-6">
      <div>
        <div className="Job-Title">Pay Range <span>(include max rate)</span></div>
        <div className="job-Data">{jobDetail.pay_range}</div>
        </div>
      </div>

      <div className="col-sm-6">
      <div>
        <div className="Job-Title">Full/Part-Time?</div>
        <div className="job-Data">{jobDetail.job_time}</div>
        </div>
      </div>

      <div className="col-sm-6">
      <div>
        <div className="Job-Title">Schedule <span>(days and hours)</span></div>
        <div className="job-Data">{jobDetail.schedule}</div>
        </div>
      </div>

      <div className="col-sm-6">
      <div>
        <div className="Job-Title">Staff Numbers <span>(How many dentists,hygienists, assistants, etc. when fully staffed)</span></div>
        <div className="job-Data">{jobDetail.staff_number}</div>
        </div>
      </div>

      <div className="col-sm-6">
      <div>
        <div className="Job-Title">Number of Operatories</div>
        <div className="job-Data">{jobDetail.no_of_operatories}</div>
        </div>
      </div>

      <div className="col-sm-12">
        <h2 className="my-5">Position Specifics</h2>
      </div>

      <div className="col-sm-12">
      <div>
        <div className="Job-Title">Equipment Specific to Office <span>(X-ray unit, scanner, programs/software etc)</span></div>
        <div className="job-Data">{jobDetail.equipment}</div>
        </div>
      </div>
      <div className="col-sm-12">
      <div>
        <div className="Job-Title">Skills <span>(Required + Preferred)</span></div>
        <div className="job-Data">{jobDetail.skills}</div>
        </div>
      </div>
      <div className="col-sm-12">
      <div>
        <div className="Job-Title">Unique Location Details <span>(Sellable properties of office and location, etc.)</span></div>
        <div className="job-Data">{jobDetail.location_details}</div>
        </div>
      </div>
      <div className="col-sm-12">
      <div>
        <div className="Job-Title">Office Dynamics <span>(Desired characteristics, Personality types, etc.)</span></div>
        <div className="job-Data">{jobDetail.office_dynamics}</div>
        </div>
      </div>
      <div className="col-sm-12">
      <div>
      <div className="Job-Title">Job Description or anything else you want the recruiter to know or include at screening</div>
        <div className="job-Data">{jobDetail.job_description}</div>
        </div>
      </div>
      
        {jobDetail.status ? (
          <div className="col-sm-12">
            <div>
                <div className="Job-Title">Job Status</div>
                <div className="job-Data">{jobDetail.status}</div>
            </div>
          </div>
        ):(
      <div className="row justify-content-center">  
          <div className="col-sm-4 flex-wrap text-center align-items-center d-flex justify-content-between mb-4">
          <button className="bg-success" onClick={() => handlerjobstatus(1)}>Approve</button>
          <button className="bg-danger" onClick={() => handlerjobstatus(2)}>Reject</button>
          </div>
      </div>
        )}
        
    </div>
  </div>
  ):(
    <div><h2>Please Login to access this page.</h2></div>
  )}
  </div>
  )
}

export default JobDetails;