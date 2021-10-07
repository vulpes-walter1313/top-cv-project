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
       schoolName: '',
       study: '', 
       schoolStartYear: '',
       schoolEndYear: '',
       jobs: []
    }
    this.submitGenInfo = this.submitGenInfo.bind(this);
    this.submitEduInfo = this.submitEduInfo.bind(this);
    this.submitWorkInfo = this.submitWorkInfo.bind(this);
  }

  submitGenInfo(values) {
    const {name, email, phone } = values;
    this.setState({name: name, email: email, phone: phone});
  }

  submitEduInfo(values) {
    const {
      school: schoolName,
      study,
      startYear: schoolStartYear,
      endYear: schoolEndYear } = values;

      this.setState({ schoolName: schoolName,
        study: study,
        schoolStartYear: schoolStartYear,
        schoolEndYear: schoolEndYear }, ()=> {
          console.log(this.state);
        });
  }
  submitWorkInfo(values) {
    this.setState({jobs: [...values.jobs]}, () => console.log(this.state));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <GeneralInfo subFunc={this.submitGenInfo}/>
        <EducationForm submitFunc={this.submitEduInfo}/>
        <ExperienceForm submitFunc={this.submitWorkInfo}/>
      </div>
    );
  }
}

export default App;
