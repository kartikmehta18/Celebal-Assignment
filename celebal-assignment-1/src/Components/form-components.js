// import React from "react";

// const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// // check min. 8 charc./ uppercase/lowercase/a number/a special are used
// const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,}$/;

// // using class component & not function
// class FormComponent extends React.Component {

//     constructor() {
//         super();

//         // for each field we will have a state & store the input given by user in this state
//         this.state = {
//             firstName: "",
//             lastName: "",
//             emailAddress: "",
//             password: "",
//             passwordConfirmation: "",
//             firstNameError: "",
//             emailAddressError: "",
//             passwordError: "",
//             passwordConfirmationError: "",
//             isFormSubmitted: false

//         };

//         // functions to bind the states
//         // used to bind the functions with the events
//         // binding is better than calling function in field itself

//         this.handleChange = this.handleChange.bind(this);
//         this.handleBlur = this.handleBlur.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.validateFirstName = this.validateFirstName.bind(this);
//         this.validateLastName = this.validateLastName.bind(this);
//         this.validateEmailAddress = this.validateEmailAddress.bind(this);
//         this.validatePassword = this.validatePassword.bind(this);
//         this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(this);
//         this.validateField = this.validateField.bind(this);
//     }

//     // events track whatever you are providing as an input to a field
//     handleChange(event) {
//         const { name, value } = event.target;

//         // the event will take the input and store in the state
//         this.setState({
//             [name]: value
//         });

//         // return the state with its value
//         return;
//     }

//     handleBlur(event) {
//         const { name } = event.target;

//         this.validateField(name);

//         return;
//     }

//     // form submit function
//     handleSubmit(event) {
//         event.preventDefault();

//         let formFields = [
//             "firstName",
//             "lastName",
//             "emailAddress",
//             "password",
//             "passwordConfirmation"
//         ];

//         let isValid = true;

//         formFields.forEach(field => {
//             isValid = this.validateField(field) && isValid;
//         });

//         if (isValid) this.setState({ isFormSubmitted: true });
//         else this.setState({ isFormSubmitted: false });

//         return this.state.isFormSubmitted;
//     }

//     // to validate fields
//     validateField(name) {
//         let isValid = false;

//         if (name === "firstName") isValid = this.validateFirstName();
//         else if (name === "lastName") isValid = this.validateLastName();
//         else if (name === "emailAddress") isValid = this.validateEmailAddress();
//         else if (name === "password") isValid = this.validatePassword();
//         else if (name === "passwordConfirmation") isValid = this.validatePasswordConfirmation();

//         return isValid;
//     }

//     validateFirstName() {
//         let firstNameError = "";
//         const value = this.state.firstName;

//         if (value.trim() === "") firstNameError = "First Name is required";

//         this.setState({
//             firstNameError
//         });
//         return firstNameError === "";
//     }

//     validateLastName() {
//         let lastNameError = "";
//         const value = this.state.lastName;

//         if (value.trim() === "") lastNameError = "Last Name is required";

//         this.setState({
//             lastNameError
//         });
//         return lastNameError === "";
//     }

//     validateEmailAddress() {
//         let emailAddressError = "";
//         const value = this.state.emailAddress;

//         if (value.trim() === "") emailAddressError = "Email Address is required";
//         else if (!emailValidator.test(value))
//             emailAddressError = "Email is not valid";

//         this.setState({
//             emailAddressError
//         });
//         return emailAddressError === "";
//     }

//     validatePassword() {
//         let passwordError = "";
//         const value = this.state.password;

//         if (value.trim() === "") passwordError = "Password is required";
//         else if (!passwordValidator.test(value))
//             passwordError = "Password must contain at least 8 characters, 1 number, 1 upper & 1 lowercase!";

//         this.setState({
//             passwordError
//         });
//         return passwordError === "";
//     }

//     validatePasswordConfirmation() {
//         let passwordConfirmationError = "";
//         if (this.state.password !== this.state.passwordConfirmation)
//             passwordConfirmationError = "Password does not match confirmation";

//         this.setState({
//             passwordConfirmationError
//         });
//         return passwordConfirmationError === "";
//     }

// render() {
//         return (
//             <div className="main">
//                 <h3 className="title">SignUp Form</h3>
//                 {this.state.isFormSubmitted ? (
//                     <div className="details">
//                         <h3>Thanks for signing up, find your details below:</h3>
//                         <div className="detailText">First Name: {this.state.firstName}</div>
//                         <div className="detailText">Last Name: {this.state.lastName}</div>
//                         <div className="detailText">Email Address: {this.state.emailAddress}</div>
//                         <div className="detailText">: {this.state.emailAddress}</div>
//                     </div>
//                 ) : (
//                     <div style={{ textAlign: "center" }}>
//                         <form onSubmit={this.handleSubmit} >
//                             <input
//                                 type="text"
//                                 placeholder="First Name"
//                                 name="firstName"
//                                 value={this.state.firstName}
//                                 onChange={this.handleChange}
//                                 onBlur={this.handleBlur}
//                                 autoComplete="off"
//                             />
//                             <br />
//                             {this.state.firstNameError && (
//                                 <div className="errorMsg">{this.state.firstNameError}</div>
//                             )}
//                             <input
//                                 type="text"
//                                 placeholder="Last Name"
//                                 name="lastName"
//                                 value={this.state.lastName}
//                                 onChange={this.handleChange}
//                                 onBlur={this.handleBlur}
//                                 autoComplete="off"
//                             />
//                             <br />
//                             {this.state.lastNameError && (
//                                 <div className="errorMsg">{this.state.lastNameError}</div>
//                             )}
//                             <input
//                                 type="email"
//                                 placeholder="Email Address"
//                                 name="emailAddress"
//                                 value={this.state.emailAddress}
//                                 onChange={this.handleChange}
//                                 onBlur={this.handleBlur}
//                                 autoComplete="off"
//                             />
//                             <br />
//                             {this.state.emailAddressError && (
//                                 <div className="errorMsg">{this.state.emailAddressError}</div>
//                             )}
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 name="password"
//                                 value={this.state.password}
//                                 onChange={this.handleChange}
//                                 onBlur={this.handleBlur}
//                                 autoComplete="off"
//                             />
//                             <br />
//                             {this.state.passwordError && (
//                                 <div className="errorMsg">{this.state.passwordError}</div>
//                             )}
//                             <input
//                                 type="password"
//                                 placeholder="Confirm Password"
//                                 name="passwordConfirmation"
//                                 value={this.state.passwordConfirmation}
//                                 onChange={this.handleChange}
//                                 onBlur={this.handleBlur}
//                                 autoComplete="off"
//                             />
//                             <br />
//                             {this.state.passwordConfirmationError && (
//                                 <div className="errorMsg">
//                                     {this.state.passwordConfirmationError}
//                                 </div>
//                             )}
//                             <button>Sign Up</button>
//                         </form>

//                     </div>
//                 )}
//             </div>
//         );
// }

// }
// export default FormComponent;

import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const emailValidator =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,}$/;

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      phoneNo: "",
      country: "",
      city: "",
      panNo: "",
      aadharNo: "",
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailAddressError: "",
      passwordError: "",
      passwordConfirmationError: "",
      phoneNoError: "",
      countryError: "",
      cityError: "",
      panNoError: "",
      aadharNoError: "",
      isFormSubmitted: false,
      showPassword: false, // For show/hide password functionality
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleBlur(event) {
    const { name } = event.target;
    this.validateField(name);
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      "firstName",
      "lastName",
      "username",
      "emailAddress",
      "password",
      "phoneNo",
      "country",
      "city",
      "panNo",
      "aadharNo",
    ];
    let isValid = true;
    formFields.forEach((field) => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) {
      this.setState({ isFormSubmitted: true });
    } else {
      this.setState({ isFormSubmitted: false });
    }
  }

  togglePassword() {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  }

  validateField(name) {
    let isValid = false;

    if (name === "firstName") isValid = this.validateFirstName();
    else if (name === "lastName") isValid = this.validateLastName();
    else if (name === "username") isValid = this.validateUsername();
    else if (name === "emailAddress") isValid = this.validateEmailAddress();
    else if (name === "password") isValid = this.validatePassword();
    else if (name === "phoneNo") isValid = this.validatePhoneNo();
    else if (name === "country") isValid = this.validateCountry();
    else if (name === "city") isValid = this.validateCity();
    else if (name === "panNo") isValid = this.validatePanNo();
    else if (name === "aadharNo") isValid = this.validateAadharNo();

    return isValid;
  }

  validateFirstName() {
    let firstNameError = "";
    const value = this.state.firstName;
    if (value.trim() === "") firstNameError = "First Name is required";
    this.setState({ firstNameError });
    return firstNameError === "";
  }

  validateLastName() {
    let lastNameError = "";
    const value = this.state.lastName;
    if (value.trim() === "") lastNameError = "Last Name is required";
    this.setState({ lastNameError });
    return lastNameError === "";
  }

  validateUsername() {
    let usernameError = "";
    const value = this.state.username;
    if (value.trim() === "") usernameError = "Username is required";
    this.setState({ usernameError });
    return usernameError === "";
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim() === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value))
      emailAddressError = "Email is not valid";
    this.setState({ emailAddressError });
    return emailAddressError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim() === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper & 1 lowercase!";
    this.setState({ passwordError });
    return passwordError === "";
  }

  validatePhoneNo() {
    let phoneNoError = "";
    const value = this.state.phoneNo;
    if (value.trim() === "") phoneNoError = "Phone Number is required";
    this.setState({ phoneNoError });
    return phoneNoError === "";
  }

  validateCountry() {
    let countryError = "";
    const value = this.state.country;
    if (value.trim() === "") countryError = "Country is required";
    this.setState({ countryError });
    return countryError === "";
  }

  validateCity() {
    let cityError = "";
    const value = this.state.city;
    if (value.trim() === "") cityError = "City is required";
    this.setState({ cityError });
    return cityError === "";
  }

  validatePanNo() {
    let panNoError = "";
    const value = this.state.panNo;
    if (value.trim() === "") panNoError = "PAN Number is required";
    this.setState({ panNoError });
    return panNoError === "";
  }

  validateAadharNo() {
    let aadharNoError = "";
    const value = this.state.aadharNo;
    if (value.trim() === "") aadharNoError = "Aadhar Number is required";
    this.setState({ aadharNoError });
    return aadharNoError === "";
  }

  render() {
    return (
      <div className="main">
        <h3 className="title">SignUp Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div className="detailText">First Name: {this.state.firstName}</div>
            <div className="detailText">Last Name: {this.state.lastName}</div>
            <div className="detailText">Username: {this.state.username}</div>
            <div className="detailText">Country: {this.state.country}</div>
            <div className="detailText">City: {this.state.city}</div>
            <div className="detailText">Phone: {this.state.phoneNo}</div>
            <div className="detailText">
              Email Address: {this.state.emailAddress}
            </div>
            <div className="detailText">Aadhar No.: {this.state.aadharNo}</div>
            <div className="detailText">PAN No.: {this.state.panNo}</div>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            {this.state.firstNameError && (
              <div className="errorMsg">{this.state.firstNameError}</div>
            )}

            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            {this.state.lastNameError && (
              <div className="errorMsg">{this.state.lastNameError}</div>
            )}

            <input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            {this.state.usernameError && (
              <div className="errorMsg">{this.state.usernameError}</div>
            )}

            <input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            {this.state.emailAddressError && (
              <div className="errorMsg">{this.state.emailAddressError}</div>
            )}

            <div className="passwordField">
              <input
                type={this.state.showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span className="eyeIcon" onClick={this.togglePassword}>
                {this.state.showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {this.state.passwordError && (
              <div className="errorMsg">{this.state.passwordError}</div>
            )}

            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            {this.state.passwordConfirmationError && (
              <div className="errorMsg">
                {this.state.passwordConfirmationError}
              </div>
            )}

            <input
              type="tel"
              placeholder="Phone No. (+XX XXXXXXXXXX)"
              name="phoneNo"
              value={this.state.phoneNo}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            {this.state.phoneNoError && (
              <div className="errorMsg">{this.state.phoneNoError}</div>
            )}

            <select
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            {this.state.countryError && (
              <div className="errorMsg">{this.state.countryError}</div>
            )}

            <select
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            >
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
            </select>
            {this.state.cityError && (
              <div className="errorMsg">{this.state.cityError}</div>
            )}

            <input
              type="text"
              placeholder="PAN No."
              name="panNo"
              value={this.state.panNo}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            {this.state.panNoError && (
              <div className="errorMsg">{this.state.panNoError}</div>
            )}

            <input
              type="text"
              placeholder="Aadhar No."
              name="aadharNo"
              value={this.state.aadharNo}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            {this.state.aadharNoError && (
              <div className="errorMsg">{this.state.aadharNoError}</div>
            )}

            <button type="submit">Sign Up</button>
          </form>
        )}
      </div>
    );
  }
}

export default FormComponent;
