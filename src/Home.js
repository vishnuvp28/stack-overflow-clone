import { useEffect, useState } from "react";
import { Base } from "./Base";
import "./Home.css";
import { API } from "./global";
import { useNavigate } from "react-router-dom";

function logout(){
  // localStorage.clear();
  // localStorage.removeItem('token')
  // window.location.href ="/"; //refresh

}
export function Home() {
  const [state, setState] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    fetch(`${API}/home`)
      .then((res) => checkAuth(res))
      .then((result) => setState(result))
      .catch((err) => logout(err));
  }, []);
  return (
    <Base>
      <div className="qn">
        <h1>Top Questions</h1>
        <button className="butt" onClick={() => navigate("/ask")}>
          Ask Questions
        </button>
      </div>
      <div>{state ? <GetQuestions data={state} /> : <h2>Loading</h2>}</div>
    </Base>
  );
}
const GetQuestions = ({ data }) => {
  return (
    <div>
      {data.map((data, index) => (
        <Data data={data} key={index} />
      ))}
    </div>
  );
};

const Data = ({ data }) => {
  const navigate=useNavigate();

  // const[state,setState]=useState();
  return (
    <div className="card" onClick={() => navigate(`/answer/${data._id}`)}>
      <h3 className="topic">{data.topic}</h3>
      <p>{data.userName}</p>
      <p>votes {data.votes}</p>
      {/* <div>
      {" "}
        <button type="button" onClick={() => setState(state + 1)}>
          votes {data.votes}
        </button>
      </div> */}
      <p>views {data.views}</p>
      {/* answer ? <p>answer {data.answer.length}</p> :<p>no answers</p> */}
    </div>
  );
};

function checkAuth(res){
  if(res.status ===401){
    throw Error("Unauthorized")
  }else{
    return res.json();
  }
}
