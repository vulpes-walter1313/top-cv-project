import React from 'react'

function OutputDisplay(props) {
  const {
    personName: name,
    email,
    phone,
    gender,
    dob,
    schools,
    jobs
  } = props;
  /* 
    schools contains an array of obj
    with the following properties
    .id
    .school
    .study
    .startYear
    .endYear
  */
   const schoolElements = schools.map(school => {
     return (
       <div key={school.id} className="results-school-group">
         <p><span className="txt-bold">School:</span> {school.school}</p>
         <p><span className="txt-bold">Area of Study:</span> {school.study}</p>
         <p><span className="txt-bold">Start Year:</span> {school.startYear}</p>
         <p><span className="txt-bold">End Year:</span> {school.endYear}</p>
       </div>
     );
   });
   /* 
    Jobs is an array of objects
    with the following properties:
    .id
    .business
    .position
    .description
    .startDate
    .endDate
    */
   const jobsElements = jobs.map(job => {
     return (
       <div key={job.id} className="results-job-group">
         <p><span className="txt-bold">Business:</span> {job.business}</p>
         <p><span className="txt-bold">Position:</span> {job.position}</p>
         <p><span className="txt-bold">Description:</span> {job.description}</p>
         <p><span className="txt-bold">Start Date:</span> {job.startDate}</p>
         <p><span className="txt-bold">End Date:</span> {job.endDate}</p>
       </div>
     );
   });

  return (
    <section className="section-component">
      <h2 className="section-title">Rendered CV</h2>
      <hr/>
      <div className="results">
        <h3 className="results-title">Personal Information</h3>
        <hr/>
        <p><span className="txt-bold">Full Name:</span> {name}</p>
        <p><span className="txt-bold">Gender:</span> {gender}</p>
        <p><span className="txt-bold">Date of Birth:</span> {dob}</p>
        <p><span className="txt-bold">Phone Number:</span> {phone}</p>
        <p><span className="txt-bold">Email:</span> {email}</p>
        <h3 className="results-title">Education:</h3>
        <hr/>
        <div className="results-schools-group">
          {schoolElements}
        </div>
        <h3 className="results-title">Employment:</h3>
        <hr/>
        <div className="results-jobs-group">
          {jobsElements}
        </div>
      </div>
    </section>
  )
}

export default OutputDisplay
