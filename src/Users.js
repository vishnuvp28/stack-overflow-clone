import React, { useEffect, useState } from "react";
import { Base } from "./Base";
import "./Users.css";
import { API } from "./global";

export function Users() {
  const [state, setState] = useState(null);
  useEffect(() => {
    fetch(`${API}/users`)
      .then((res) => res.json())
      .then((result) => setState(result));
  }, []);
  console.log(state);
  return (
    <Base>
      <div className="users">
        <h1>Users</h1>
        <div>{state ? <GetUsers data={state} /> : <h3>Loading</h3>}</div>
      </div>
    </Base>
  );
}

function GetUsers({ data }) {
  return (
    <div className="user" >
      {data.map((data, ind) => (
        <Data data={data} key={ind} />
      ))}
    </div>
  );
}

function Data({ data }) {
  return (
    <div className="use">
      <h3>{data.userName}</h3>
    </div>
  );
}
