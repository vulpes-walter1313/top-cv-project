import React, { Component } from 'react';
import WorkPinBlock from './WorkPinBlock';

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       business: '',
       position: '',
       description: '',
       startDate: '',
       endDate: ''
    };
    this.businessChangeHandler = this.businessChangeHandler.bind(this);
    this.positionChangeHandler = this.positionChangeHandler.bind(this);
    this.descriptionChangeHandler = this.descriptionChangeHandler.bind(this);
    this.workStartChangeHandler = this.workStartChangeHandler.bind(this);
    this.workEndChangeHandler = this.workEndChangeHandler.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
  }

  businessChangeHandler(e) {
    this.setState({business: e.target.value});
  }
  positionChangeHandler(e) {
    this.setState({position: e.target.value});
  }
  descriptionChangeHandler(e) {
    this.setState({description: e.target.value});
  }
  workStartChangeHandler(e) {
    this.setState({startDate: e.target.value});
  }
  workEndChangeHandler(e) {
    this.setState({endDate: e.target.value});
  }
  submitFormHandler(e) {
    e.preventDefault();
    this.props.submitFunc(this.state);
    this.setState({
        business: '',
        position: '',
        description: '',
        startDate: '',
        endDate: ''
      });
  }
  
  render() {
    const { jobs } = this.props
    const jobsElements = jobs.map( job => {
      return (
      <li key={job.id}>
        <WorkPinBlock workInfo={job} removeFunc={this.props.removeFunc}/>
        </li>
      );
    });
    return (
      <div>
        <h2>Work Experience</h2>
        <form className="experience-info-form" onSubmit={this.submitFormHandler}>
          <div className="experience-input-group">
            <label htmlFor="business">Business Name</label>
            <input id="business"
              name="business"
              type="text"
              value={this.state.business}
              onChange={this.businessChangeHandler}/>
          </div>
          <div className="experience-input-group">
            <label htmlFor="position">Position Name</label>
            <input id="position"
              name="position"
              type="text"
              value={this.state.position}
              onChange={this.positionChangeHandler}/>
          </div>
          <div className="experience-input-group">
            <label htmlFor="description">Description</label>
            <input id="description"
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.descriptionChangeHandler}/>
          </div>
          <div className="experience-input-group">
            <label htmlFor="startdate">Started Working (Month and Year)</label>
            <input id="startdate"
              name="startdate"
              type="text"
              value={this.state.startDate}
              onChange={this.workStartChangeHandler}/>
          </div>
          <div className="experience-input-group">
            <label htmlFor="enddate">Worked until (Month and Year)</label>
            <input id="enddate"
              name="enddate"
              type="text"
              value={this.state.endDate}
              onChange={this.workEndChangeHandler}/>
          </div>
          <button>Submit</button>
        </form>
        {(()=> {
          if (jobs.length > 0) {
            return (
              <div>
                <p>Jobs:</p>
                <ul>{jobsElements}</ul>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}

export default ExperienceForm;