import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./RegisterComp.css";

const Posturl = "https://loginapiedu.herokuapp.com/api/auth/register";
class RegisterComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    sessionStorage.setItem("userdata", this.state);
    fetch(Posturl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
    .then(
      this.props.history.push('/login')
      )
  };

  render() {
    return (
      <>
        <div className="form_wrapper">
          <div className="form_container">
            <h2 className="title_container">Register</h2>
            <div className="form-feilds">
              <div className="input-field">
                <label htmlFor="name" className="field">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={this.state.name}
                  placeholder="Enter your name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="phone" className="field">
                  Mobile number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  value={this.state.phone}
                  placeholder="Enter your mobile number"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="email" className="field">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  value={this.state.email}
                  placeholder="Enter your email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="password" className="field">
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  required
                  value={this.state.password}
                  placeholder="Enter Password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="btns">
              <Link to="/">
                <button className="cancel">Cancel</button>
              </Link>
              <button
                className="register"
                type="submit"
                onClick={this.handleSubmit}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default RegisterComp;
