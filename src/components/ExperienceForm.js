import React, { useState } from 'react';
import WorkPinBlock from './WorkPinBlock';

function ExperienceForm(props) {
  const [business, setBusiness] = useState('');
  const [position, setPosition] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function businessChangeHandler(e) {
    setBusiness(e.target.value);
  }
  function positionChangeHandler(e) {
    setPosition(e.target.value);
  }
  function descriptionChangeHandler(e) {
    setDescription(e.target.value);
  }
  function workStartChangeHandler(e) {
    setStartDate(e.target.value);
  }
  function workEndChangeHandler(e) {
    setEndDate(e.target.value);
  }
  function submitFormHandler(e) {
    e.preventDefault();
    props.submitFunc({ business, position, description, startDate, endDate });
    setBusiness('');
    setPosition('');
    setDescription('');
    setStartDate('');
    setEndDate('');
  }
  function editJobHandler(business, position, description, startDate, endDate) {
    setBusiness(business);
    setPosition(position);
    setDescription(description);
    setStartDate(startDate);
    setEndDate(endDate);
  }

  const { jobs } = props;
  const jobsElements = jobs.map(job => {
    return (
      <li key={job.id}>
        <WorkPinBlock workInfo={job} removeFunc={props.removeFunc} editFunc={editJobHandler} />
      </li>
    );
  });

  return (
    <div className="section-component">
      <h2 className="section-title">Work Experience</h2>
      <hr />
      <form className="experience-info-form" onSubmit={submitFormHandler}>
        <div className="experience-input-group">
          <label htmlFor="business">Business Name</label>
          <input id="business"
            name="business"
            type="text"
            value={business}
            onChange={businessChangeHandler} />
        </div>
        <div className="experience-input-group">
          <label htmlFor="position">Position Name</label>
          <input id="position"
            name="position"
            type="text"
            value={position}
            onChange={positionChangeHandler} />
        </div>
        <div className="experience-input-group">
          <label htmlFor="description">Description</label>
          <input id="description"
            name="description"
            type="text"
            value={description}
            onChange={descriptionChangeHandler} />
        </div>
        <div className="experience-input-group">
          <label htmlFor="startdate">Started Working (Month and Year)</label>
          <input id="startdate"
            name="startdate"
            type="text"
            value={startDate}
            onChange={workStartChangeHandler} />
        </div>
        <div className="experience-input-group">
          <label htmlFor="enddate">Worked until (Month and Year)</label>
          <input id="enddate"
            name="enddate"
            type="text"
            value={endDate}
            onChange={workEndChangeHandler} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {(() => {
        if (jobs.length > 0) {
          return (
            <div className="submitted-pin-blocks">
              <h3>Work Experience:</h3>
              <ul>{jobsElements}</ul>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default ExperienceForm;