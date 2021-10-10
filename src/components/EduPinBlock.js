import React from 'react';

function EduPinBlock(props) {
  const {schoolInfo} = props;
  /* 
  SchoolInfo has the following properties:
  .school
  .study
  .endYear
  .startYear
  .id */

  function removeSchool() {
    props.removeFunc(schoolInfo.id);
  }

  return (
    <div>
      <p>{schoolInfo.school}</p>
      <p>From {schoolInfo.startYear} Til {schoolInfo.endYear}</p>
      <button type="button" onClick={removeSchool}>X</button>
    </div>
  );
}

export default EduPinBlock;
