import React from "react";
import "./Signup.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { useState } from "react";

export function Signup() {
 
  const history=useHistory();
  return (
    <div className="signup">
      <div className="div1">
        <img
          src="https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
          alt="img"
        ></img>
      </div>
      <div className="div2">
        <Form>
          <br></br> <br></br>
          <h1 className="si">Sign up</h1> <br></br>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter name" name="userName"/>
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <button className="b" variant="primary" type="submit" onClick={()=>history.push("/login")}>
            Sign Up
          </button>
          <br></br>
          <div className="alink">
            <a href="#">Forgot Password?</a><br></br>
          <a href="http://localhost:3000/login">Login</a>
        </div>
          <br></br>
        </Form>
       
      </div>{" "}
    </div>
  );
}
