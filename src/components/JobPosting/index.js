import React, { useEffect, useState } from "react";
import axios from 'axios';
import './index.css' ;

const JobPosting = () => {
 
  const [options, setOptions] = useState([]);
  const [jobtitle, setjobTitle] = useState("");
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


  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    let errors = {};

    if (!name.trim()) {
      errors.name = "Name of office is required";
    }
    if (!jobtitle.trim()) {
      errors.jobtitle = "Job title is required";
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
    // Form is valid, submit it
    console.log("Job Title: ", jobtitle);
    console.log("Name: ", name);
    console.log("Physical Address: ", address);
    console.log("ROM: ", rom);
    console.log("Date: ", date);
    console.log("Exp: ", exp);
    console.log("Pay Range: ", payRange);
    console.log("Full / Part Time : ", fulltime);
    console.log("Schedule : ", schedule);
    console.log("Staff Number : ", staffnum);
    console.log("Operation : ", operation);
    console.log("Equipment : ", equipment);
    console.log("Skills : ", skills);
    console.log("Unique Locations : ", uniqLoc);
    console.log("Office Dynamics : ", offcdyn);
    console.log("SJob Desc : ", jobdesc);
    
    
    
    
  };

  const handlechange = e => {
    setErrors({});
    if (e.target.name == "jobtitle") setjobTitle(e.target.value);
    if (e.target.name == "name") setName(e.target.value);
    if (e.target.name == "address") setAddress(e.target.value);
    if (e.target.name == "rom") setRom(e.target.value);
    if (e.target.name == "date") setDate(e.target.value);
    if (e.target.name == "exp") setExp(e.target.value);
    if (e.target.name == "payRange") setPayRange(e.target.value);
    if (e.target.name == "fulltime") setFullTime(e.target.value);
    if (e.target.name == "schedule") setSchedule(e.target.value);
    if (e.target.name == "staffnum") setStaffNum(e.target.value);
    if (e.target.name == "operation") setOperation(e.target.value);
    if (e.target.name == "equipment") setEquipment(e.target.value);
    if (e.target.name == "skills") setSkills(e.target.value);
    if (e.target.name == "uniqLoc") setUniqLoc(e.target.value);
    if (e.target.name == "offcdyn") setOffcDyn(e.target.value);
    if (e.target.name == "jobdesc") setJobDesc(e.target.value);
    if (e.target.name == "date") setDate(e.target.value);
    if (e.target.name == "date") setDate(e.target.value);

  }

  useEffect(() => {
    fetch("http://localhost:8888/dag-ats/officedata.php")
      .then((response) => response.json())
      .then((data) => setOptions(data));
  }, []);

  const handleofficehange = (event) => {
    setName(event.target.value)
      fetch(`http://localhost:8888/dag-ats/officedetails.php?officeid=${event.target.value}`)
      .then(response => response.json())
      .then(data => {
        setAddress(data.address);
        setRom(data.rom);
      })
      .catch(error => {
        console.log(error);
      });

  };
  return (
    <div className="job-posting-form-outer my-5 p-5">
      <div className="container job-posting-form-inner my-5 p-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="jobtitle">Job Title*</label>
              <select
                id="jobtitle"
                name="jobtitle"
                value={jobtitle}
                onChange={(e) => handlechange(e)}>
                <option value="">Select Job Title</option>
                <option value="Dental Assistant">Dental Assistant	</option>
                <option value="dentist">Dentist</option>
                <option value="EFDA">EFDA</option>
                <option value="Front Desk">Front Desk</option>
                <option value="Hygienists">Hygienists</option>
                <option value="Scheduling Coordinator">Scheduling Coordinator</option>
                <option value="Patient Care Coordinator">Patient Care Coordinator</option>
                <option value="Accounts Recievable Specialist">Accounts Recievable Specialist</option>
              </select>
              {errors.jobtitle && <div className="error">{errors.jobtitle}</div>}
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
              <select name="office_name" value={name} onChange={handleofficehange} >
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
              />
              {errors.rom && <div className="error">{errors.rom}</div>}
            </div>

            <div className="col-sm-6">
              <label htmlFor="date">Date Requested</label>
              <input
                type="date"
                id="date"
                name="date"
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
                name="exp"
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
                name="payRange"
                value={payRange}
                onChange={(e) => setPayRange(e.target.value)}
              />
              {errors.payRange && <div className="error">{errors.payRange}</div>}
            </div>

            <div className="col-sm-6">
              <label htmlFor="fulltime">Full/Part-Time?</label>
              <input
                type="text"
                id="fulltime"
                name="fulltime"
                value={fulltime}
                onChange={(e) => setFullTime(e.target.value)}
              />
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
                name="staffnum"
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
                name="operation"
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
                name="uniqLoc"
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
                name="offcdyn"
                value={offcdyn}
                onChange={(e) => setOffcDyn(e.target.value)}
              />
              {errors.offcdyn && <div className="error">{errors.offcdyn}</div>}
            </div>

            <div className="col-sm-12">
              <label htmlFor="jobdesc"> Job Description or anything else you want the recruiter to know or include at screening </label>
              <textarea
                id="jobdesc"
                name="jobdesc"
                value={jobdesc}
                onChange={(e) => setJobDesc(e.target.value)}
                rows={5}
                cols={5}
              />
              {errors.jobdesc && <div className="error">{errors.jobdesc}</div>}
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-5 text-center">
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