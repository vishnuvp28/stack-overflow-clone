import PublicIcon from '@mui/icons-material/Public';
import './Sidenav.css';
import { useNavigate } from 'react-router-dom';

export function Sidenav() {
  const navigate=useNavigate();
  return (
    <div className="side"><br></br>
       <button className="sidenav" onClick={()=>navigate("/")} >
        Home
      </button><br></br><br></br>
      <label className='public'>PUBLIC</label>
     
      <button className="sidenav"  onClick={()=>navigate("/questions")}>
        {" "} 
        <PublicIcon/> Questions
      </button><br></br>
      <button className="sidenav"  onClick={()=>navigate("/tags")}>
        {" "} 
        Tags 
      </button><br></br>
      <button className="sidenav"  onClick={()=>navigate("/users")}>
        {" "} 
        Users
      </button><br></br>
      <button  className="sidenav" onClick={()=>navigate("/companies")}>
        {" "} 
        Companies
      </button><br></br>
    </div>
  );
}
