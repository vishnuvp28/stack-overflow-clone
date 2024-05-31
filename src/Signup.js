import React from "react";
import "./Signup.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { API } from "./global";

export function Signup() {
  const navigate=useNavigate();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: { userName: "", password: "" },
    onSubmit: async (values) => {
      console.log(values);

      const data = await fetch(`${API}/`, {
        method: "POST",
        headers: {
          "Content-type": "applicati  on/json",
        },
        body: JSON.stringify(values),
      });
      if (data.status === 400) {
        alert("UserName already exist(redirecting to login page)");
        navigate("/login");
      } else {
        alert("User added successfully");
        navigate("/login");
      }
    },
  });
  return (
    <div className="signup">
      <div className="div">
        <div className="div1">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
            alt="img"
          ></img>
        </div>
        <div className="div2">
          <form onSubmit={handleSubmit} className="form">
            <br></br> <br></br>
            <h1 className="si">Sign up</h1> <br></br>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                placeholder="Enter name"
                value={values.userName}
                onChange={handleChange}
                name="userName"
                autoComplete="username"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                value={values.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </Form.Group>
            <button className="b" variant="primary" type="submit">
              Sign Up
            </button>
            <br></br>
            <div className="alink">
              <Link href="/">Forgot Password?</Link>
              <br></br>
              <Link href="/login">Login</Link>
            </div>
            <br></br>
          </form>
        </div>
      </div>{" "}
    </div>
  );
}
