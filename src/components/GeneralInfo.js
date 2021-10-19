import React, { Component } from 'react'
import StoreLocal from '../logic/StoreLocal';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       name: '',
       email: '',
       phone: '',
       gender: 'Other',
       dob: ''
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.formSubmit = this.formSubmit.bind(this)
  }
  componentDidMount() {
    const data = StoreLocal.loadState();
    if (data !== null) {
      this.setState({
        name: data.name,
        email: data.email,
        phone: data.phone
      });
    }
  }
  changeNameHandler(e) {
    this.setState({ name: e.target.value});
  }
  changeEmailHandler(e) {
    this.setState({ email: e.target.value});
  }
  changePhoneHandler(e) {
    this.setState({ phone: e.target.value});
  }
  changeGenderHandler(e) {
    this.setState({gender: e.target.value});
  }
  formSubmit(e) {
    e.preventDefault();
    this.props.subFunc(this.state);
  }
  
  render() {
    return (
      <div className="section-component">
        <h2 className="section-title">Basic Information</h2>
        <hr/>
        <form className="general-info-form" onSubmit={this.formSubmit}>
          <div className="name-input-group">
            <label htmlFor="name">Name</label>
            <input type="text"
              onChange={this.changeNameHandler}
              id="name"
              name="name"
              value={this.state.name}/>
          </div>
          <div className="email-input-group">
            <label htmlFor="email">Email</label>
            <input type="text"
              onChange={this.changeEmailHandler}
              id="email"
              name="email"
              value={this.state.email}/>
          </div>
          <div className="phone-input-group">
            <label htmlFor="phone">Phone</label>
            <input type="text"
              onChange={this.changePhoneHandler}
              id="phone"
              name="phone"
              value={this.state.phone}/>
          </div>
          <div className="gender-input-group">
            <label htmlFor="gender">Gender</label>
            <select
              onChange={this.changeGenderHandler}
              id="gender"
              name="gender"
              value={this.state.gender}>
                <option value="Other">Prefer Not To Say</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default GeneralInfo
