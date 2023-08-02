import React from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from "formik";
import { API } from "./global";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";


export  function Login() {
  const history =useHistory()
  const[formState,setFormState]=useState("error")
  const {values,handleChange,handleSubmit} = useFormik({
    initialValues :{userName : "vp",password:"vp@123"},
    onSubmit:async (values)=>{
      console.log(values);


      const data = await fetch(`${API}/login`,{
        method:"POST",
        headers :{
          "Content-type":"application/json",
        },
        body: JSON.stringify(values),
      });
      if(data.status===401){
        console.log("Error")
        setFormState("Error")
      }
      else{
        setFormState("success")
         const result = await data.json();
        console.log("Success",result);
        localStorage.setItem("token",result.token);
         history.push('/home')
      }
    
    },
  })
  return (
    <div className="signup">
<div className="div1">
        <img src="https://media.istockphoto.com/id/1426988809/photo/security-password-login-online-concept-hands-typing-and-entering-username-and-password-of.webp?b=1&s=170667a&w=0&k=20&c=AJD5Wv30lmyILccJyMpQGhkmh0VhZ5WNDtk53MO1OVM=" alt="img"></img>
      </div>
      <div className="div2">
      <Form onSubmit={handleSubmit}>
        <br></br> <br></br>
      <h1 className="si">Login</h1> <br></br> 
    
      <Form.Group className="mb-3"controlId="formBasicEmail">
        <Form.Control type="text"   value={values.userName} onChange={handleChange} name="userName" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3"     controlId="formBasicPassword">
        <Form.Control type="password" value={values.password} onChange={handleChange} name="password" placeholder="Password" />
      </Form.Group>
     
      <button type='submit' className="b"
       variant="primary" >
        {formState ==="success" ? "Retry" :"Submit"}
       
      </button><br></br><br></br>
    </Form>
      </div>    </div>
  );
}
