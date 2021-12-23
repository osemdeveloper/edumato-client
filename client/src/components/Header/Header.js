import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const url = "https://loginapiedu.herokuapp.com/api/auth/userInfo";
class Header extends Component {
  constructor(props) {
    super();

    this.state = {
      userData: "",
    };
  }

  handleLogout = () => {
    this.setState({ userData: "" });
    sessionStorage.removeItem("ltk");
    sessionStorage.removeItem("userData");
  };

  conditionalLogin = () => {
    if (this.state.userData.name) {
      let data = this.state.userData;
      let outputArray = [data.name, data.email, data.phone, data.role];
      sessionStorage.setItem("userData", outputArray);
      return (
        <>
          <h4 id="userName">Hi {this.state.userData.name}</h4>
          <Link to="/">
            <button id="logout" onClick={this.handleLogout}>
              Logout
            </button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <div id="login">
            <Link to="/login">Login</Link>
          </div>
          <div id="create-account">
            <Link to="/register" id="acc-btn">
              Create an account
            </Link>
          </div>
        </>
      );
    }
  };

  render() {
    return (
      <div id="header-listing">
        <div className="logo-listing-sec">
          <div className="logo-listing-circle-listing">
            <Link to="/">
              <div className="logo-listing">🍔</div>
            </Link>
          </div>
        </div>

        <div className="login-listing-acc">
          {this.conditionalLogin()}

          <Link to="/viewOrder">
            <img
              className="view-order"
              src="data:image/jpeg;base64,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"
              alt="Orders"
            />
          </Link>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(url, {
      method: "GET",
      headers: {
        "x-access-token": sessionStorage.getItem("ltk"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userData: data,
        });
      });
  }
}

export default Header;
