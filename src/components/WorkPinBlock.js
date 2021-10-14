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
    <div className="pin-block">
      <p className="pin-block-title">{workInfo.business}</p>
      <hr/>
      <p>{workInfo.position}</p>
      <p>Start: {workInfo.startDate}<br/>End: {workInfo.endDate}</p>
      <button type="button" onClick={removeJob}>Remove</button>
    </div>
  );
}

export default WorkPinBlock;
