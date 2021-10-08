import React, { Component } from 'react'

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       name: '',
       email: '',
       phone: ''
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.formSubmit = this.formSubmit.bind(this)
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
  formSubmit(e) {
    e.preventDefault();
    this.props.subFunc(this.state);
  }
  
  render() {
    return (
      <div>
        <h2>Basic Information</h2>
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
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default GeneralInfo