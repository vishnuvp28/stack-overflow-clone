import PublicIcon from '@mui/icons-material/Public';
import './Sidenav.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function Sidenav() {
  const history=useHistory();
  return (
    <div className="side"><br></br>
       <button className="sidenav" onClick={()=>history.push("/")} >
        Home
      </button><br></br><br></br>
      <label className='public'>PUBLIC</label>
     
      <button className="sidenav"  onClick={()=>history.push("/questions")}>
        {" "} 
        <PublicIcon/> Questions
      </button><br></br>
      <button className="sidenav"  onClick={()=>history.push("/tags")}>
        {" "} 
        Tags 
      </button><br></br>
      <button className="sidenav"  onClick={()=>history.push("/users")}>
        {" "} 
        Users
      </button><br></br>
      <button  className="sidenav" onClick={()=>history.push("/companies")}>
        {" "} 
        Companies
      </button><br></br>
    </div>
  );
}
