import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css' ;

const JobPosting = () => {
 
  const [options, setOptions] = useState([]);
  const [jobtitledata, setJobtitleData] = useState([]);
  const [jobTitle, setjobTitle] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [rom, setRom] = useState("");
  const [date, setDate] = useState("");
  const [exp, setExp] = useState("");
  const [payRange, setPayRange] = useState("");
  const [fulltime, setFullTime] = useState("");
  const [schedule, setSchedule] = useState("");
  const [staffnum, setStaffNum] = useState("");
  const [operation, setOperation] = useState("");
  const [equipment, setEquipment] = useState("");
  const [skills, setSkills] = useState("");
  const [uniqLoc, setUniqLoc] = useState("");
  const [offcdyn, setOffcDyn] = useState("");
  const [jobdesc, setJobDesc] = useState("");
  
  
  const [errors, setErrors] = useState({});

  let userid = localStorage.getItem('userid');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    let errors = {};

    if (!name.trim()) {
      errors.name = "Name of office is required";
    }
    if (!jobTitle.trim()) {
      errors.jobTitle = "Job title is required";
    }
    if (!address.trim()) {
      errors.address = "Physical Address is required";
    }
    if (!rom.trim()) {
      errors.rom = "ROM is required";
    }
    if (!date.trim()) {
      errors.date = "Date is required";
    }
    if (!exp.trim()) {
      errors.exp = "Experience is required";
    }
    if (!payRange.trim()) {
      errors.payRange = "Pay Range is required";
    }
    if (!fulltime.trim()) {
      errors.fulltime = "Full / Part Time is required";
    }
    if (!schedule.trim()) {
      errors.schedule = "Schedule is required";
    }
    if (!staffnum.trim()) {
      errors.staffnum = "Staff Number is required";
    }
    if (!operation.trim()) {
      errors.operation = "Number of Operation is required";
    }
    if (! equipment.trim()) {
      errors. equipment = "Equipment is required";
    }
    if (! skills.trim()) {
      errors. skills = "Skills is required";
    }

    if (! uniqLoc.trim()) {
      errors. uniqLoc = "Uniq Location is required";
    }
    if (! offcdyn.trim()) {
      errors. offcdyn = "Office Dynamics is required";
    }
    if (! jobdesc.trim()) {
      errors. jobdesc = "Job Description is required";
    }
   
   

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

        const form = e.target;
        const formData = new FormData(form);
        
        fetch(API_url + 'jobposting', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data.status);
          if(data.status === '200'){
          
              navigate(`../../thank-you`);
              //alert("Data save successfully") ;
          }
      })
      .catch(error => console.error(error));
    
  };

  // const handlechange = e => {
  //   setErrors({});
  //   if (e.target.name == "jobtitle") setjobTitle(e.target.value);
  //   if (e.target.name == "name") setName(e.target.value);
  //   if (e.target.name == "address") setAddress(e.target.value);
  //   if (e.target.name == "rom") setRom(e.target.value);
  //   if (e.target.name == "date") setDate(e.target.value);
  //   if (e.target.name == "exp") setExp(e.target.value);
  //   if (e.target.name == "payRange") setPayRange(e.target.value);
  //   if (e.target.name == "fulltime") setFullTime(e.target.value);
  //   if (e.target.name == "schedule") setSchedule(e.target.value);
  //   if (e.target.name == "staffnum") setStaffNum(e.target.value);
  //   if (e.target.name == "operation") setOperation(e.target.value);
  //   if (e.target.name == "equipment") setEquipment(e.target.value);
  //   if (e.target.name == "skills") setSkills(e.target.value);
  //   if (e.target.name == "uniqLoc") setUniqLoc(e.target.value);
  //   if (e.target.name == "offcdyn") setOffcDyn(e.target.value);
  //   if (e.target.name == "jobdesc") setJobDesc(e.target.value);
  //   if (e.target.name == "date") setDate(e.target.value);
  //   if (e.target.name == "date") setDate(e.target.value);
 
  // }

  let API_url = window.myGlobalVar ;
  let navigate = useNavigate();

  useEffect(() => {
    fetch(API_url + "officedata")
      .then((response) => response.json())
      .then((data) => setOptions(data));
  }, []);

  useEffect(() => {
    fetch(API_url + "jobtitle")
      .then((jobresponse) => jobresponse.json())
      .then((jobdata) => setJobtitleData(jobdata));
  }, []);

  const handleofficehange = (event) => {
    setName(event.target.value)
      fetch(`${API_url}officedetails/${event.target.value}`)
      .then(response => response.json())
      .then(data => {
        setAddress(data.address);
        
        if(jobTitle == 2 || jobTitle == 5)
        {
          setRom("Kelsea");

        }else{
          setRom(data.rom);
        }
      })
      .catch(error => {
        console.log(error);
      });

  };
  const handlejobtitlchange = (event) => {
    
    setjobTitle(event.target.value) ;

    if(event.target.value == 2 || event.target.value == 5)
    {
      setRom("Kelsea");

    }else{
      setRom("");
    }
  };
  return (
    <div className="job-posting-form-outer my-5 p-5">
      <div className="container job-posting-form-inner my-5 p-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="jobtitle">Job Title*</label>
             
              <select id="jobtitle" name="jobtitle" onChange={handlejobtitlchange}>
                <option value="">Select an option</option>
                {jobtitledata.map((jobitem) => (
                  <option key={jobitem.id} value={jobitem.id}>{jobitem.jobtitle}</option>
                ))}
              </select>

              {errors.jobTitle && <div className="error">{errors.jobTitle}</div>}
            </div>

            <div className="col-sm-6">
              <label htmlFor="name">Name of Office</label>
              {/* <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              /> */}
              <select name="office" value={name} onChange={handleofficehange} >
                <option value="">Select an option</option>
                {options.map((item) => (
                  <option key={item.id} value={item.id}>{item.office}</option>
                ))}
              </select>
              {errors.name && <div className="error">{errors.name}</div>}
            </div>

            <div className="col-sm-12">
              <label htmlFor="address"> Physical Address*</label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {errors.address && <div className="error">{errors.address}</div>}
            </div>

            <div className="col-sm-6">
              <label htmlFor="rom"> ROM</label>
              <input
                type="text"
                id="rom"
                name="rom"
                value={rom}
                onChange={(e) => setRom(e.target.value)}
                readOnly={true} />
              {errors.rom && <div className="error">{errors.rom}</div>}
            </div>

            <div className="col-sm-6">
              <label htmlFor="date">Date Requested</label>
              <input
                type="date"
                id="date"
                name="request_date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.date && <div className="error">{errors.date}</div>}
            </div>

            <div className="col-sm-6">
              <label htmlFor="exp">Required Experience</label>
              <input
                type="text"
                id="exp"
                name="experience"
                value={exp}
                onChange={(e) => setExp(e.target.value)}
              />
              {errors.exp && <div className="error">{errors.exp}</div>}
            </div>

            <div className="col-sm-6">
              <label htmlFor="payRange">Pay Range <span>(include max rate)</span></label>
              <input
                type="text"
                id="payRange"
                name="pay_range"
                value={payRange}
                onChange={(e) => setPayRange(e.target.value)}
              />
              {errors.payRange && <div className="error">{errors.payRange}</div>}
            </div>

            <div className="col-sm-6">
              <label htmlFor="fulltime">Job Type</label>
              <select name="job_time" id="fulltime" onChange={(e) => setFullTime(e.target.value)}>
                <option value="">Select an option</option>
                <option value="Full-Time">Full Time</option>
                <option value="Part-Time">Part Time</option>
              </select>
              {errors.fulltime && <div className="error">{errors.fulltime}</div>}
            </div>

            <div className="col-sm-6">
              <label htmlFor="schedule"> Schedule <span>(days and hours)</span></label>
              <input
                type="text"
                id="schedule"
                name="schedule"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
              />
              {errors.schedule && <div className="error">{errors.schedule}</div>}
            </div>

            <div className="col-sm-6">
              <label htmlFor="staffnum"> Staff Numbers <span>(How many dentists,hygienists, assistants, etc. when fully staffed)</span></label>
              <input
                type="text"
                id="staffnum"
                name="staff_number"
                value={staffnum}
                onChange={(e) => setStaffNum(e.target.value)}
              />
              {errors.staffnum && <div className="error">{errors.staffnum}</div>}
            </div>

            <div className="col-sm-6">
              <label htmlFor="operation">Number of Operatories</label>
              <input
                type="text"
                id="operation"
                name="no_of_operatories"
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
              />
              {errors.operation && <div className="error">{errors.operation}</div>}
            </div>

            <div className="col-sm-12">
              <h2 className="my-5">Position Specifics</h2>
            </div>

            <div className="col-sm-12">
              <label htmlFor="equipment"> Equipment Specific to Office <span>(X-ray unit, scanner, programs/software etc)</span></label>
              <input
                type="text"
                id="equipment"
                name="equipment"
                value={equipment}
                onChange={(e) => setEquipment(e.target.value)}
              />
              {errors.equipment && <div className="error">{errors.equipment}</div>}
            </div>

            <div className="col-sm-12">
              <label htmlFor="name"> Skills <span>(Required + Preferred)</span></label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
              {errors.skills && <div className="error">{errors.skills}</div>}
            </div>

            <div className="col-sm-12">
              <label htmlFor="uniqLoc"> Unique Location Details <span>(Sellable properties of office and location, etc.)</span></label>
              <input
                type="text"
                id="uniqLoc"
                name="location_details"
                value={uniqLoc}
                onChange={(e) => setUniqLoc(e.target.value)}
              />
              {errors.uniqLoc && <div className="error">{errors.uniqLoc}</div>}
            </div>

            <div className="col-sm-12">
              <label htmlFor="offcdyn">Office Dynamics <span>(Desired characteristics, Personality types, etc.)</span></label>
              <input
                type="text"
                id="offcdyn"
                name="office_dynamics"
                value={offcdyn}
                onChange={(e) => setOffcDyn(e.target.value)}
              />
              {errors.offcdyn && <div className="error">{errors.offcdyn}</div>}
            </div>

            <div className="col-sm-12">
              <label htmlFor="jobdesc"> Job Description or anything else you want the recruiter to know or include at screening </label>
              <textarea
                id="jobdesc"
                name="job_description"
                value={jobdesc}
                onChange={(e) => setJobDesc(e.target.value)}
                rows={5}
                cols={5}
              />
              {errors.jobdesc && <div className="error">{errors.jobdesc}</div>}
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-5 text-center">
                <input type="hidden" name="create_by" value={userid} />
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default JobPosting;