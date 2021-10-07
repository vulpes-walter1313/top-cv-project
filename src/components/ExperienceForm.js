import React, { Component } from 'react';

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       jobs: [],
       business: '',
       position: '',
       description: '',
       startdate: '',
       enddate: ''
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
    this.setState({startdate: e.target.value});
  }
  workEndChangeHandler(e) {
    this.setState({enddate: e.target.value});
  }
  submitFormHandler(e) {
    e.preventDefault();
    this.setState(prevState => {
      return {
        jobs: [...prevState.jobs,
          {
            id: Date.now(),
            business: prevState.business,
            position: prevState.position,
            description: prevState.description,
            startdate: prevState.startdate,
            enddate: prevState.enddate
          }],
        business: '',
        position: '',
        description: '',
        startdate: '',
        enddate: ''
      }
    }, () => console.log(this.state));
    this.props.submitFunc(this.state);
  }
  
  render() {
    const jobsElements = this.state.jobs.map( job => <li key={job.id}>{job.business}</li>);
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
              value={this.state.startdate}
              onChange={this.workStartChangeHandler}/>
          </div>
          <div className="experience-input-group">
            <label htmlFor="enddate">Worked until (Month and Year)</label>
            <input id="enddate"
              name="enddate"
              type="text"
              value={this.state.enddate}
              onChange={this.workEndChangeHandler}/>
          </div>
          <button>Submit</button>
        </form>
        <div>
          <p>Jobs:</p>
          <ul>{jobsElements}</ul>
        </div>
      </div>
    );
  }
}

export default ExperienceForm;