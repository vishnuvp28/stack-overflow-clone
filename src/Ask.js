import React from "react";
import "./Ask.css";
import { useFormik } from "formik";
import { API } from "./global";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Ask = () => {
  const history = useHistory();
  const { handleChange, handleSubmit, handleBlur, values } = useFormik({
    initialValues: {
      topic: "",
      description: "",
      userName: "",
      answer:[],
      views:0,
      votes:0,
      tags:"",
      companies:"",
    },
    onSubmit: (values) => {
      console.log(values);
      addQuestion(values);
    },
  });
  const addQuestion = async (values) => {
    await fetch(`${API}/create`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });
    alert("Your question added successfully");
    history.push("/home");
  };
  return (
    <div className="ask">
      <h1>Post Your Questions</h1>
      <form onSubmit={handleSubmit} className="textArea">
        <textarea
          className="txt1"
          type="text"
          placeholder="Question Topic"
          onChange={handleChange}
          onBlur={handleBlur}
          name="topic"
          value={values.topic}
        ></textarea>
        <textarea
          className="txt2"
          type="text"
          placeholder="Question Description"
          onChange={handleChange}
          onBlur={handleBlur}
          name="description"
          value={values.description}
        ></textarea>
        <textarea
          className="txt3"
          type="text"
          placeholder="Your Name"
          onChange={handleChange}
          onBlur={handleBlur}
          name="userName"
          value={values.userName}
        ></textarea>
        <textarea
          className="txt4"
          type="text"
          placeholder="Your tags like Javascript,Java,C,C++,Python"
          onChange={handleChange}
          onBlur={handleBlur}
          name="tags"
          value={values.tags}
        ></textarea>
        <button type="submit" className="bu">
          Post Your Question
        </button>
     
      </form>
    </div>
  );
};
