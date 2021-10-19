import React from 'react';
import './App.css';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import GeneralInfo from './components/GeneralInfo';
import Header from './components/Header';
import OutputDisplay from './components/OutputDisplay';
import StoreLocal from './logic/StoreLocal';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       email: '',
       phone: '',
       gender: 'Other',
       schools: [],
       jobs: []
    }
    this.submitGenInfo = this.submitGenInfo.bind(this);
    this.submitEduInfo = this.submitEduInfo.bind(this);
    this.submitWorkInfo = this.submitWorkInfo.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
    this.removeJob = this.removeJob.bind(this);
  }

  submitGenInfo(values) {
    const {name, email, phone, gender } = values;
    this.setState({name: name, email: email, phone: phone, gender: gender});
  }
  componentDidUpdate() {
    StoreLocal.saveState(this.state);
  }
  componentDidMount() {
    const data = StoreLocal.loadState();
    console.log(data);
    if (data !== null) {
      this.setState({
        name: data.name,
        phone: data.phone,
        email: data.email,
        jobs: [...data.jobs],
        schools: [...data.schools]
      });
    }
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
    this.setState(prevState => {
      return {
        jobs: [...prevState.jobs, 
        {
          id: Date.now(),
          business: values.business,
          position: values.position,
          description: values.description,
          startDate: values.startDate,
          endDate: values.endDate
        }]
      }
    });
  }
  removeEducation(idToRemove) {
    this.setState(prevState => {
      const newSchoolsArr = prevState.schools.filter(school => school.id != idToRemove)
      return {
        schools: newSchoolsArr
      };
    });
  }
  removeJob(idToRemove) {
    this.setState(prevState => {
      const newJobsArr = prevState.jobs.filter(job => job.id != idToRemove)
      return {
        jobs: newJobsArr
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <GeneralInfo subFunc={this.submitGenInfo}/>
        <EducationForm submitFunc={this.submitEduInfo} schools={this.state.schools} removeFunc={this.removeEducation}/>
        <ExperienceForm submitFunc={this.submitWorkInfo} jobs={this.state.jobs} removeFunc={this.removeJob}/>
        <OutputDisplay
          personName={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
          gender={this.state.gender}
          schools={this.state.schools}
          jobs={this.state.jobs}
          />
      </div>
    );
  }
}

export default App;
