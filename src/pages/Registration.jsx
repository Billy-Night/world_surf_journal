import React, { useContext } from "react";
import { MyContext } from "../context/MyProvider";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);

  const handleSubmitReg = (event) => {
    event.preventDefault();
    if (!process.env.REACT_APP_BACKEND_URL) {
      console.warn("Backend URL is not set!");
    }
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/registration`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        first_name: context.user.first_name,
        last_name: context.user.last_name,
        email: context.user.email,
        password: context.user.password,
      }),
    }).then((res) => {
      if (res.status === 201) {
        context.setUser(context.userBlank);
        navigate("/");
      } else {
        console.log("There was an error registering a new user");
      }
    });
  };

  return (
    <div className="registration_main">
      <div className="space"></div>
      <div className="registration_main_container">
        <div className="registration_form_container">
          <div className="registration_inner_form_container">
            <h2>Please Sign Up</h2>
            <p>Register Below</p>
            <div className="registration_form">
              <form onSubmit={handleSubmitReg}>
                <label htmlFor="first_name">First Name:</label>
                <input
                  value={context.user.first_name}
                  onChange={context.handleUserDetailsChange}
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                />

                <label htmlFor="last_name">Last Name:</label>
                <input
                  value={context.user.last_name}
                  onChange={context.handleUserDetailsChange}
                  name="last_name"
                  placeholder="Last Name"
                  type="text"
                  required
                />

                <label htmlFor="email">Email:</label>
                <input
                  value={context.user.email}
                  onChange={context.handleUserDetailsChange}
                  name="email"
                  placeholder="email"
                  type="Email"
                  required
                />

                <label htmlFor="Password">Password:</label>
                <input
                  value={context.user.password}
                  onChange={context.handleUserDetailsChange}
                  name="password"
                  placeholder="password"
                  type="password"
                  required
                />

                <div className="registration_form_btn_container">
                  <input
                    className="registration_form_btn"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
