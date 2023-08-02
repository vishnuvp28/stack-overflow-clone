import { useEffect, useState } from 'react';
import { Base } from './Base';
import './Tags.css';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { API } from './global';

export function Tags() {
  const [state,setState]=useState([])
  // const history=useHistory();
  useEffect(() => {
    fetch(`${API}/tags`)
      .then((res) => res.json())
      .then((result) => setState(result));
  }, []);
 console.log(state)
  return (
    <Base >
    <div className='tags'>
      <h1>Tags</h1>
      <div>
        {state ? <GetTag data={state}/> : <h2>Loading</h2>}
      </div>
    </div>
    </Base>
  );
}
function GetTag({data}){
  return(
    <div className='ta'>
      {data.map((data, index) => (
        <Data data={data} key={index} />
      ))}
    </div>
  )
}

function Data({data}){
  return(
    <div className='tag'>
      <h3>{data.tags}</h3>
    </div>
  )
}