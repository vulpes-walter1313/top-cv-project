import React, { Component } from 'react';
import EduPinBlock from './EduPinBlock';

class EducationForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       school: '',
       study: '', 
       startYear: '',
       endYear: '',
    };
    this.schoolOnChangeHandler = this.schoolOnChangeHandler.bind(this);
    this.studyOnChangeHandler = this.studyOnChangeHandler.bind(this);
    this.startYearOnChangeHandler = this.startYearOnChangeHandler.bind(this);
    this.endYearOnChangeHandler = this.endYearOnChangeHandler.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
  }
  schoolOnChangeHandler(e) {
    this.setState({school: e.target.value});
  }
  studyOnChangeHandler(e) {
    this.setState({study: e.target.value});
  }
  startYearOnChangeHandler(e) {
    this.setState({startYear: e.target.value});
  }
  endYearOnChangeHandler(e) {
    this.setState({endYear: e.target.value});
  }
  submitFormHandler(e) {
    e.preventDefault();
    this.props.submitFunc(this.state);
    this.setState({
        school: '',
        study: '',
        startYear: '',
        endYear: ''
      });
  }
  
  render() {
    const education = this.props.schools.map(school => {
      return (
        <li key={school.id}>
          <EduPinBlock schoolInfo={school} removeFunc={this.props.removeFunc}/>
        </li>
      );
    });

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
              onChange={this.schoolOnChangeHandler}/>
          </div>
          <div className="study-input-group">
            <label htmlFor="study">Area of Study</label>
            <input type="text"
              id="study"
              name="study"
              value={this.state.study}
              onChange={this.studyOnChangeHandler}/>
          </div>
          <div className="dateStudy-input-group">
            <label htmlFor="studystart">Start Year</label>
            <input type="text"
              id="studystart"
              name="studystart"
              value={this.state.startYear}
              onChange={this.startYearOnChangeHandler}/>
            <label htmlFor="studyend">End Year</label>
            <input type="text"
              id="studyend"
              name="studyend"
              value={this.state.endYear}
              onChange={this.endYearOnChangeHandler}/>
          </div>
          <button>Submit</button>
        </form>
        {(()=> {
          if (this.props.schools.length > 0) {
            return (
              <div>
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
}

export default EducationForm;
