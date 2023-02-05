import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';

function SignUp(e) {

  // USE OF HOOKS

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //    LOCAL FUCTIONS

  function LoginFunc(e) {
    e.preventDefault();
    setEmail("");
    setPassword("");

    const url = "http://localhost:1000/Signin";

    const headers = {
      "Content-Type": "application/json",
    };

    let data = {
      email: email,
      password: password,
    };

    axios
      .post(url, data, { headers })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("this is error");
      });
  }

  return (
    <>
      <p className="mt-5 fw-bolder fs-1 text-center text-primary"> Sign Up  </p>
      <div>
        <p className='fs-3 text-center text-danger'>Note: The Website is under Development Stage</p>
        <p className='fs-3 text-center '>To view Dashboard directly hit "/after" in searchbar</p>
      </div>

      <div className="col-sm-6 offset-3" >
        <form className="m-5">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <Link to="/login" className="form-item">
            Already have an account Signin?
          </Link>
          <br />
          <button
            onClick={(e) => {
              LoginFunc(e);
            }}
            type="submit"
            className="btn btn-primary mt-3 "
          >
            SignUp
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;

