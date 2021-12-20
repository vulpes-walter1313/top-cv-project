import React, { useState } from 'react';
import EduPinBlock from './EduPinBlock';

function EducationForm(props) {
  const [school, setSchool] = useState('');
  const [study, setStudy] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');

  function schoolOnChangeHandler(e) {
    setSchool(e.target.value);
  }
  function studyOnChangeHandler(e) {
    setStudy(e.target.value);
  }
  function startYearOnChangeHandler(e) {
    setStartYear(e.target.value);
  }
  function endYearOnChangeHandler(e) {
    setEndYear(e.target.value);
  }
  function submitFormHandler(e) {
    e.preventDefault();
    props.rootDispatchFunc({
      type: 'EDUINFO_SUBMIT',
      payload: { 
        school,
        study,
        startYear,
        endYear,
        id: Date.now()
      }
    });
    setSchool('');
    setStudy('');
    setStartYear('');
    setEndYear('');
  }

  function editSchoolInfo(school, study, startYear, endYear) {
    setSchool(school);
    setStudy(study);
    setStartYear(startYear);
    setEndYear(endYear);
  }

  const education = props.schools.map(school => {
    return (
      <li key={school.id}>
        <EduPinBlock schoolInfo={school}
          removeFunc={props.rootDispatchFunc}
          editFunc={editSchoolInfo} />
      </li>
    );
  });

  return (
    <div className="section-component">
      <h2 className="section-title">Education Information</h2>
      <hr />
      <form className="education-info-form" onSubmit={submitFormHandler}>
        <div className="school-input-group">
          <label htmlFor="school">School Name</label>
          <input type="text"
            id="school"
            name="school"
            value={school}
            onChange={schoolOnChangeHandler} />
        </div>
        <div className="study-input-group">
          <label htmlFor="study">Area of Study</label>
          <input type="text"
            id="study"
            name="study"
            value={study}
            onChange={studyOnChangeHandler} />
        </div>
        <div className="dateStudy-input-group">
          <label htmlFor="studystart">Start Year</label>
          <input type="text"
            id="studystart"
            name="studystart"
            value={startYear}
            onChange={startYearOnChangeHandler} />
          <label htmlFor="studyend">End Year</label>
          <input type="text"
            id="studyend"
            name="studyend"
            value={endYear}
            onChange={endYearOnChangeHandler} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {(() => {
        if (props.schools.length > 0) {
          return (
            <div className="submitted-pin-blocks">
              <h3>Educational Info:</h3>
              <ul>
                {education}
              </ul>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default EducationForm;
