import React from 'react';
import './App.css';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import GeneralInfo from './components/GeneralInfo';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       email: '',
       phone: '',
       schools: [],
       jobs: []
    }
    this.submitGenInfo = this.submitGenInfo.bind(this);
    this.submitEduInfo = this.submitEduInfo.bind(this);
    this.submitWorkInfo = this.submitWorkInfo.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
  }

  submitGenInfo(values) {
    const {name, email, phone } = values;
    this.setState({name: name, email: email, phone: phone});
  }

  submitEduInfo(value) {
    this.setState({ schools: [...this.state.schools, 
    {
      school: value.school,
      study: value.study,
      startYear: value.startYear,
      endYear: value.endYear,
      id: Date.now()
    }] }, ()=> {
        console.log("Education info added:")
        console.log(this.state);
      });
  }
  submitWorkInfo(values) {
    this.setState({jobs: [...values.jobs]}, () => console.log(this.state));
  }
  removeEducation(idToRemove) {
    this.setState(prevState => {
      const newSchoolsArr = prevState.schools.filter(school => school.id != idToRemove)
      return {
        schools: newSchoolsArr
      };
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <GeneralInfo subFunc={this.submitGenInfo}/>
        <EducationForm submitFunc={this.submitEduInfo} schools={this.state.schools} removeFunc={this.removeEducation}/>
        <ExperienceForm submitFunc={this.submitWorkInfo}/>
      </div>
    );
  }
}

export default App;
