import React from 'react';

function WorkPinBlock(props) {
  const { workInfo } = props;
  /* 
    workInfo has the following properties:
    .business
    .position
    .description
    .startDate
    .endDate
  */
 function removeJob() {
   props.removeFunc(workInfo.id);
 }

  return (
    <div>
      <p>{workInfo.business}</p>
      <p>{workInfo.position}</p>
      <p>Start: {workInfo.startDate} End: {workInfo.endDate}</p>
      <button type="button" onClick={removeJob}>X</button>
    </div>
  );
}

export default WorkPinBlock;
