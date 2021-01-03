import React, { Component } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  gender: "Male",
  rememberMe: true,
  nameError: "",
  emailError: "",
  passwordError: "",
};

export class ValidateFormInput extends Component {
  state = initialState;

  validateItems = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (this.state.name.length < 3) {
      nameError = "Name must contain atleast 3 characters";
    }
    if (!this.state.email.includes("@") || this.state.email.length < 6) {
      emailError = "Invalid Email";
    }
    if (this.state.password.length < 3) {
      passwordError = "Password too Short";
    }

    if (nameError || emailError || passwordError) {
      this.setState({ nameError, emailError, passwordError });
      return false;
    }
    return true;
  };

  handleOnChange = (event) => {
    const ischeckBox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: ischeckBox
        ? event.target.checked
        : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validateItems();
    if (isValid) {
      this.setState(
        { nameError: "", emailError: "", passwordError: "" },
        () => {
          console.log(this.state);
        },
        () => {
          this.setState(initialState);
        }
      );
    }
  };

  render() {
    return (
      <div className="App" style={{ fontSize: "1em" }}>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label style={{ color: "yellow" }}>Name</label>
            <br></br>
            <input
              value={this.state.name}
              type="text"
              name="name"
              onChange={this.handleOnChange}
              required
            />
            <div style={{ color: "red" }}>{this.state.nameError}</div>
          </div>
          <br></br>
          <div>
            <label style={{ color: "yellow" }}>Email</label>
            <br></br>
            <input
              value={this.state.email}
              type="text"
              name="email"
              onChange={this.handleOnChange}
              required
            />
            <div style={{ color: "red" }}>{this.state.emailError}</div>
          </div>
          <br></br>
          <div>
            <label style={{ color: "yellow" }}>Password</label>
            <br></br>
            <input
              value={this.state.password}
              type="password"
              name="password"
              onChange={this.handleOnChange}
              required
            />
            <div style={{ color: "red" }}>{this.state.passwordError}</div>
          </div>
          <br></br>
          <div>
            <label style={{ color: "yellow" }}>Gender</label>
            <br></br>
            <select
              name="gender"
              style={{ fontSize: "1em" }}
              onChange={this.handleOnChange}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </div>
          <br></br>
          <div>
            <label style={{ color: "yellow" }}>Remember Me</label>
            <input
              name="rememberMe"
              type="checkbox"
              onChange={this.handleOnChange}
              checked={this.state.rememberMe}
            ></input>
          </div>
          <br></br>
          <div>
            <button type="submit" style={{ color: "brown" }}>
              <b>Submit</b>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
