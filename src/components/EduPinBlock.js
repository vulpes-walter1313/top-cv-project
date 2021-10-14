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
    <div className="pin-block">
      <p className="pin-block-title">{schoolInfo.school}</p>
      <hr/>
      <p>{schoolInfo.study}</p>
      <p>{schoolInfo.startYear} - {schoolInfo.endYear}</p>
      <button type="button" onClick={removeSchool}>Remove</button>
    </div>
  );
}

export default EduPinBlock;
