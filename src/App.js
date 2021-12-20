import React, { useEffect, useReducer } from 'react';
import './App.css';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import GeneralInfo from './components/GeneralInfo';
import Header from './components/Header';
import OutputDisplay from './components/OutputDisplay';
import StoreLocal from './logic/StoreLocal';

// class App extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        name: '',
//        email: '',
//        phone: '',
//        dob: '',
//        gender: 'Other',
//        schools: [],
//        jobs: []
//     }
//     this.submitGenInfo = this.submitGenInfo.bind(this);
//     this.submitEduInfo = this.submitEduInfo.bind(this);
//     this.submitWorkInfo = this.submitWorkInfo.bind(this);
//     this.removeEducation = this.removeEducation.bind(this);
//     this.removeJob = this.removeJob.bind(this);
//   }

//   submitGenInfo(values) {
//     const {name, email, phone, gender, dob } = values;
//     this.setState({name: name, email: email, phone: phone, gender: gender, dob: dob});
//   }
//   componentDidUpdate() {
//     StoreLocal.saveState(this.state);
//   }
//   componentDidMount() {
//     const data = StoreLocal.loadState();
//     console.log(data);
//     if (data !== null) {
//       this.setState({
//         name: data.name,
//         phone: data.phone,
//         email: data.email,
//         gender: data.gender,
//         dob: data.dob,
//         jobs: [...data.jobs],
//         schools: [...data.schools]
//       });
//     }
//   }
//   submitEduInfo(value) {
//     this.setState({ schools: [...this.state.schools, 
//     {
//       school: value.school,
//       study: value.study,
//       startYear: value.startYear,
//       endYear: value.endYear,
//       id: Date.now()
//     }] }, ()=> {
//         console.log("Education info added:")
//         console.log(this.state);
//       });
//   }
//   submitWorkInfo(values) {
//     this.setState(prevState => {
//       return {
//         jobs: [...prevState.jobs, 
//         {
//           id: Date.now(),
//           business: values.business,
//           position: values.position,
//           description: values.description,
//           startDate: values.startDate,
//           endDate: values.endDate
//         }]
//       }
//     });
//   }
//   removeEducation(idToRemove) {
//     this.setState(prevState => {
//       const newSchoolsArr = prevState.schools.filter(school => school.id != idToRemove)
//       return {
//         schools: newSchoolsArr
//       };
//     });
//   }
//   removeJob(idToRemove) {
//     this.setState(prevState => {
//       const newJobsArr = prevState.jobs.filter(job => job.id != idToRemove)
//       return {
//         jobs: newJobsArr
//       };
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <GeneralInfo subFunc={this.submitGenInfo}/>
//         <EducationForm submitFunc={this.submitEduInfo} schools={this.state.schools} removeFunc={this.removeEducation}/>
//         <ExperienceForm submitFunc={this.submitWorkInfo} jobs={this.state.jobs} removeFunc={this.removeJob}/>
//         <OutputDisplay
//           personName={this.state.name}
//           email={this.state.email}
//           phone={this.state.phone}
//           gender={this.state.gender}
//           dob={this.state.dob}
//           schools={this.state.schools}
//           jobs={this.state.jobs}
//           />
//       </div>
//     );
//   }
// }
const initialState = {
  name: '',
  email: '',
  phone: '',
  dob: '',
  gender: 'Other',
  schools: [],
  jobs: []
}

function reducer(state, action) {
  switch (action.type) {
    case 'GENINFO_SUBMIT':
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        gender: action.payload.gender,
        dob: action.payload.dob
      };
      break;
    case 'EDUINFO_SUBMIT':
      return {
        ...state,
        schools: [
          ...state.schools,
          action.payload
        ]
      };
      break;
    case 'EXPINFO_SUBMIT':
      return {
        ...state,
        jobs: [
          ...state.jobs,
          action.payload
        ]
      };
      break;
    case 'REMOVE_EDU':
      const idToRemove = action.payload.id;
      const newSchools = state.schools.filter(school => school.id !== idToRemove);
      return {
        ...state,
        schools: newSchools
      };
      break;
    case 'REMOVE_WORK':
      const jobIdToRemove = action.payload.id;
      const newJobs = state.jobs.filter(job => job.id !== jobIdToRemove);
      return {
        ...state,
        jobs: newJobs
      };
      break;
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Header />
      <GeneralInfo submitFunc={dispatch} />
      <EducationForm rootDispatchFunc={dispatch} schools={state.schools} />
      <ExperienceForm rootDispatchFunc={dispatch} jobs={state.jobs} />
      <OutputDisplay
        personName={state.name}
        email={state.email}
        phone={state.phone}
        gender={state.gender}
        dob={state.dob}
        schools={state.schools}
        jobs={state.jobs}
      />
    </div>
  );
}

export default App;
