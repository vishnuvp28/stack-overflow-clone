import React from "react";
import "./Answer.css";

import { useState } from "react";
import { API } from "./global";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";

const Answers = () => {
  const [state, setState] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/answer/${id}`)
      .then((res) => res.json())
      .then((result) => setState(result));
  }, [id]);
  return (
    <div>{state ? <GetQuestion data={state} /> : <h2>Loading...</h2>}</div>
  );
};

const GetQuestion = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, values, handleBlur } = useFormik({
    initialValues: {
      userNameAnswer: "",
      answer: "",
    },
    onSubmit: (value) => {
      console.log(value);
      postAnswer(value);
    },
  });
  const ans = data.answer;
  // console.log(ans);
  const postAnswer = async (value) => {
    await fetch(
      `${API}/answer/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(value),
        headers: { "Content-Type": "application/json" },
      },
      [id]
    );
    alert("Your Answer Added Successfully");
    navigate("/");
  };
  return (
    <div>
      <div className="card">
        <h2>{data.topic}</h2>
        <p>{data.description}</p>
        <p>{data.userName}</p>
      </div>
      <div>
        {ans.map((res, index) => (
          <GetAnswer res={res} key={index} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="txt5"
          type="text"
          placeholder="Your Name"
          name="userNameAnswer"
          value={values.userNameAnswer}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br></br>
        <textarea
          className="txt6"
          type="text"
          placeholder="Post Your Answer"
          name="answer"
          value={values.answer}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br></br>
        <button type="submit" className="btn2">
          Post Your Answer
        </button><br></br>
        <button type="submit" className="btn2" onClick={()=>navigate('/home')}>
          Back
        </button>
      </form>
    </div>
  );
};
const GetAnswer = ({ res }) => {
  return (
    <div className="an">
      <div>
      <p>{res.userNameAnswer}</p>
      <p>{res.answer}</p>
     </div>
     <div>
     <Votes />
     </div>
    </div>
    
  );
};

export default Answers;

function Votes(){
  const [count, setCount] = useState(0);
return(
<div>
        {count}{" "}
        <button type="button" onClick={() => setCount(count + 1)}>
          votes
        </button>
      </div>
)
}

// import { useNavigate, useParams } from "react-router-dom";
// import { API } from "../global";
// import "./Answers.css";
// import React, { useEffect, useState } from "react";
// import { useFormik } from "formik";

// const Answers = () => {
//   const [state, setState] = useState(null);
//   const { id } = useParams();
//   const getQuestion = () => {
//     fetch(`${API}/answer/${id}`)
//       .then((res) => res.json())
//       .then((result) => setState(result));
//   };
//   useEffect(() => {
//     getQuestion();
//   }, [id]);
//   return (
//     <div>
//       {state ? (
//         <GetQuestion data={state} getQuestion={getQuestion} />
//       ) : (
//         <h2>Loading...</h2>
//       )}
//     </div>
//   );
// };

// const GetQuestion = ({ data, getQuestion }) => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const { handleSubmit, handleChange, values, handleBlur } = useFormik({
//     initialValues: {
//       userNameAnswer: "",
//       answer: "",
//     },
//     onSubmit: (value) => {
//       postAnswer(value);
//     },
//   });
//   const ans = data.answer;
//   console.log(ans);
//   const postAnswer = async (value) => {
//     await fetch(
//       `${API}/answer/${id}`,
//       {
//         method: "PUT",
//         body: JSON.stringify(value),
//         headers: { "Content-Type": "application/json" },
//       },
//       [id]
//     );
//     alert("Your Answer Added Successfully");
//     // getQuestion();
//     navigate("/");
//   };
//   return (
//     <div>
//       <div className="card">
//         <h2>{data.topic}</h2>
//         <p>{data.description}</p>
//         <p>{data.userName}</p>
//       </div>
//       <div>
//         {ans.map((res, index) => (
//           <GetAnswer res={res} key={index} />
//         ))}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           className="name"
//           type="text"
//           placeholder="Your Name"
//           name="userNameAnswer"
//           value={values.userNameAnswer}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         <textarea
//           className="answer"
//           type="text"
//           placeholder="Post Your Answer"
//           name="answer"
//           value={values.answer}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         <button type="submit" className="btn">
//           Post Your Answer
//         </button>
//       </form>
//     </div>
//   );
// };
// const GetAnswer = ({ res }) => {
//   return (
//     <div>
//       <p>{res.userNameAnswer}</p>
//       <p>{res.answer}</p>
//     </div>
//   );
// };

// export default Answers;
