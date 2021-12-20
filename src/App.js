import React, { useEffect, useReducer } from 'react';
import './App.css';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import GeneralInfo from './components/GeneralInfo';
import Header from './components/Header';
import OutputDisplay from './components/OutputDisplay';
import StoreLocal from './logic/StoreLocal';

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
    case 'LOAD_FROM_STORE':
      const data = action.payload;
      return {
        name: data.name,
        email: data.email,
        phone: data.phone,
        gender: data.gender,
        dob: data.dob,
        schools: [...data.schools],
        jobs: [...data.jobs]
      };
    case 'GENINFO_SUBMIT':
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        gender: action.payload.gender,
        dob: action.payload.dob
      };
    case 'EDUINFO_SUBMIT':
      return {
        ...state,
        schools: [
          ...state.schools,
          action.payload
        ]
      };
    case 'EXPINFO_SUBMIT':
      return {
        ...state,
        jobs: [
          ...state.jobs,
          action.payload
        ]
      };
    case 'REMOVE_EDU':
      const idToRemove = action.payload.id;
      const newSchools = state.schools.filter(school => school.id !== idToRemove);
      return {
        ...state,
        schools: newSchools
      };
    case 'REMOVE_WORK':
      const jobIdToRemove = action.payload.id;
      const newJobs = state.jobs.filter(job => job.id !== jobIdToRemove);
      return {
        ...state,
        jobs: newJobs
      };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Initial load from localStorage
  useEffect(() => {
    const data = StoreLocal.loadState();
    console.log(data);
    if (data !== null) {
      dispatch({
        type: 'LOAD_FROM_STORE',
        payload: data
      })
    }
  }, []);

  // Save to localStorage after changes
  useEffect(() => {
    console.log('save to LocalStorage Called');
    StoreLocal.saveState(state);
  }, [state]);

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
