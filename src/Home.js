import { useEffect, useState } from "react";
import { Base } from "./Base";
import "./Home.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./global";

function logout(){
  // localStorage.clear();
  // localStorage.removeItem('token')
  // window.location.href ="/"; //refresh

}
export function Home() {
  const [state, setState] = useState(null);
  const history = useHistory();
  useEffect(() => {
    fetch(`${API}/`)
      .then((res) => checkAuth(res))
      .then((result) => setState(result))
      .catch((err) => logout(err));
  }, []);
  return (
    <Base>
      <div className="qn">
        <h1>Top Questions</h1>
        <button className="butt" onClick={() => history.push("/ask")}>
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
  const history = useHistory();
  // const[state,setState]=useState();
  return (
    <div className="card" onClick={() => history.push(`/answer/${data._id}`)}>
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
