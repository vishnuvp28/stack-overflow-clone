import { useEffect, useState } from 'react';
import { Base } from './Base';
import './Companies.css';
import { API } from './global';

export function Companies() {
  const [state,setState]=useState(null)
    useEffect(() => {
    fetch(`${API}/companies`)
      .then((res) => res.json())
      .then((result) => setState(result));
  },[]);
 console.log(state);
  return (
    <Base >
    <div className='users'>
      <h1>Companies</h1>
      <div>
        {state ? <GetComp data={state}/> : <h3>Loading</h3>}
      </div>
    </div>
    </Base>
  );
}
function GetComp({data}){
  return(
    <div className='user'>
      {data.map((data, index) => (
        <Data data={data} key={index} />
      ))}
    </div>
  )
}

function Data({data}){
  return(
    <div className='use'>
      <h3>{data.companies}</h3>
    </div>
  )
}