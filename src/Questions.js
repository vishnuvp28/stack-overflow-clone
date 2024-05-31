import { useEffect, useState } from "react";
import { Base } from "./Base";
import "./Questions.css";
import { API } from "./global";
import { useNavigate } from "react-router-dom";

export function Questions() {
  const [state, setState] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${API}/questions`)
      .then((res) => res.json())
      .then((result) => setState(result));
  }, []);

  
  console.log(state);
  return (
    <Base>
      <div className="qn">
        <h1>All Questions</h1>
        <button className="butt" onClick={() => navigate("/ask")}>Ask Questions</button>
       
      </div>
      <div>
        {state ? <GetQuestions data={state} /> :<h2>Loading</h2>}
      </div>
    </Base>
  );
}
function GetQuestions({ data }) {
  return (
    <div>
      {data.map((data, index) => (
        <Data data={data} key={index} />
      ))}
    </div>
  );
}
function Data({ data }) {
  const navigate = useNavigate();


  return (
    <div  className="card" onClick={()=>navigate(`/answer/${data._id}`)}>
      <h3 className="topic">{data.topic}</h3>
      <p >{data.description}</p>
      <p>{data.userName}</p>
    </div>
  );
}

export default Questions;
