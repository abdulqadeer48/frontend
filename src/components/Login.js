
import axios from "axios";
import React, { useState, } from "react";
import { Link } from "react-router-dom";

function LoginPage(e) {
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
      <p className="mt-5 fw-bolder fs-1 text-center text-primary"> Login </p>

      <div className="col-sm-6 offset-3">
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
          {/* <a href="/forget" className="form-item">
                Forgot password?
              </a> <br></br> */}

          <Link to="/signup" className="form-item">
            don't have an account create?
          </Link>
          <br />
          <button
            onClick={(e) => {
              LoginFunc(e);
            }}
            type="submit"
            className="btn btn-primary mt-3"
          >
           
            LogIn
          </button>
          
        </form>
      </div>

      {/* <div>
            <ol>
              {allUsers.map((item) => {
                return (
                  <li>
                    email: <p>{item.email}</p>
                    password: <p>{item.password}</p>
                  </li>
                )
              })}
            </ol>
          </div> */}
    </>
  );
}

export default LoginPage;



