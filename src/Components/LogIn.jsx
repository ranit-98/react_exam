import React, { useState } from "react";
import Styles from "../Styles/form.module.css";
import { Link, useNavigate } from "react-router-dom";
import { logInPost } from "../Services/API";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";
const LogIn = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const [error, setError] = useState();
  const [clickSpin, setClickSpin] = useState(false);
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState(initialData);
  const validation = () => {
    let error = {};
    if (!loginDetails.email) {
      error.email = "email is required";
    }
    if (!loginDetails.password) {
      error.password = "password is required";
    }
    return error;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
    if (name == "email") {
      if (value.length === 0) {
        setError({ ...error, email: "@email is require" });
        setLoginDetails({ ...loginDetails, email: "" });
      } else {
        setError({ ...error, email: "" });
        setLoginDetails({ ...loginDetails, email: value });
      }
    }
    if (name == "password") {
      if (value.length === 0) {
        setError({ ...error, password: "@password is require" });
        setLoginDetails({ ...loginDetails, password: "" });
      } else {
        setError({ ...error, password: "" });
        setLoginDetails({ ...loginDetails, password: value });
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setClickSpin(true);
    let ErrorList = validation();
    setError(validation());
    console.log(loginDetails);
    const response = await logInPost(loginDetails);
    Object.keys(ErrorList).length === 0 &&
      toast.success(response?.data?.message);
    setTimeout(() => {
      Object.keys(ErrorList).length === 0 && navigate("/all-blogs");
    }, 800);

    toast.error(response?.response?.data?.message);
    setClickSpin(false);
  };
  return (
    <>
      <ToastContainer />
      <form
        className={Styles.formContainer}
        method="post"
        onSubmit={handleSubmit}
        style={{height:"23rem"}}
      >
        <h1 className={Styles.formHeading}>LogIn</h1>
        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            name="email"
            value={loginDetails.email}
            onChange={handleChange}
          />
          <span style={{ color: "red", marginLeft: "10rem" }}>
            {error?.email}
          </span>
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            name="password"
            value={loginDetails.password}
            onChange={handleChange}
          />
          <span style={{ color: "red", marginLeft: "10rem" }}>
            {error?.password}
          </span>
        </div>
        {!clickSpin ? (
          <button className="btn btn-primary" onClick={handleSubmit}>
            Login
          </button>
        ) : (
            <button className="btn btn-primary">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div></button>
        )}
        <br />
        <Link className={Styles.RegLink} to="/register">
          Go to Registration page
        </Link>
        <br />
      </form>
    </>
  );
};

export default LogIn;
