import React, { Component } from 'react';

class EducationForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       school: '',
       study: '', 
       startYear: '',
       endYear: ''
    };
    this.schoolSubmitHandler = this.schoolSubmitHandler.bind(this);
    this.studySubmitHandler = this.studySubmitHandler.bind(this);
    this.startYearSubmitHandler = this.startYearSubmitHandler.bind(this);
    this.endYearSubmitHandler = this.endYearSubmitHandler.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
  }
  schoolSubmitHandler(e) {
    this.setState({school: e.target.value});
  }
  studySubmitHandler(e) {
    this.setState({study: e.target.value});
  }
  startYearSubmitHandler(e) {
    this.setState({startYear: e.target.value});
  }
  endYearSubmitHandler(e) {
    this.setState({endYear: e.target.value});
  }
  submitFormHandler(e) {
    e.preventDefault();
    this.props.submitFunc(this.state);
  }
  
  render() {
    return (
      <div>
        <h2>Education Information</h2>
        <form className="education-info-form" onSubmit={this.submitFormHandler}>
          <div className="school-input-group">
            <label htmlFor="school">School Name</label>
            <input type="text"
              id="school"
              name="school"
              value={this.state.school}
              onChange={this.schoolSubmitHandler}/>
          </div>
          <div className="study-input-group">
            <label htmlFor="study">Area of Study</label>
            <input type="text"
              id="study"
              name="study"
              value={this.state.study}
              onChange={this.studySubmitHandler}/>
          </div>
          <div className="dateStudy-input-group">
            <label htmlFor="studystart">Start Year</label>
            <input type="text"
              id="studystart"
              name="studystart"
              value={this.state.startYear}
              onChange={this.startYearSubmitHandler}/>
            <label htmlFor="studyend">End Year</label>
            <input type="text"
              id="studyend"
              name="studyend"
              value={this.state.endYear}
              onChange={this.endYearSubmitHandler}/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default EducationForm;
