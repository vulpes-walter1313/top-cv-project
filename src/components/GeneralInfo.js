import React, { useState, useEffect } from 'react';
import StoreLocal from '../logic/StoreLocal';

function GeneralInfo(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('Other');
  const [dob, setDob] = useState('');

  function changeNameHandler(e) {
    setName(e.target.value);
  }
  function changeEmailHandler(e) {
    setEmail(e.target.value);
  }
  function changePhoneHandler(e) {
    setPhone(e.target.value);
  }
  function changeGenderHandler(e) {
    setGender(e.target.value);
  }
  function changeDobHandler(e) {
    setDob(e.target.value);
  }
  function formSubmit(e) {
    e.preventDefault();
    props.subFunc({ name, email, phone, gender, dob });
  }

  // initial mount for data
  useEffect(() => {
    const data = StoreLocal.loadState();
    if (data !== null) {
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
      setDob(data.dob);
      setGender(data.gender);
    }
  }, []);

  return (
    <div className="section-component">
      <h2 className="section-title">Basic Information</h2>
      <hr />
      <form className="general-info-form" onSubmit={formSubmit}>
        <div className="name-input-group">
          <label htmlFor="name">Name</label>
          <input type="text"
            onChange={changeNameHandler}
            id="name"
            name="name"
            value={name} />
        </div>
        <div className="email-input-group">
          <label htmlFor="email">Email</label>
          <input type="text"
            onChange={changeEmailHandler}
            id="email"
            name="email"
            value={email} />
        </div>
        <div className="phone-input-group">
          <label htmlFor="phone">Phone</label>
          <input type="text"
            onChange={changePhoneHandler}
            id="phone"
            name="phone"
            value={phone} />
        </div>
        <div className="gender-input-group">
          <label htmlFor="gender">Gender</label>
          <select
            onChange={changeGenderHandler}
            id="gender"
            name="gender"
            value={gender}>
            <option value="Other">Prefer Not To Say</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="dob-input-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="text"
            onChange={changeDobHandler}
            id="dob"
            name="dob"
            value={dob} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GeneralInfo;