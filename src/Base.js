import "./Base.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Sidenav } from "./Sidenav";
// import { Body } from "./Body";
// import Form from 'react-bootstrap/Form';
// import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function logout(){
  localStorage.clear();
  // localStorage.removeItem('token')
  // window.location.href ="/login"; //refresh

}
export function Base({title,children}) {
  return (
    <>
    <div className="nav">
      <div className="top">
        <div className="stack">
          <img className="overflow"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1200px-Stack_Overflow_icon.svg.png"
            alt="stackoverflow.img"
          />
          <h2>
            stack <b>overflow</b>
          </h2>
        </div>
        </div>
        <div className="account">
        <button onClick={()=>logout()}>
          <AccountCircleIcon sx={{ fontSize: 50 }} color="action" />
          </button>
        </div>
      </div>
      <div className="bottom">
       
      
       <div className="left">
        <Sidenav />
       </div>
       <div className="right">
       <div className='title'>{title}</div>
       <div className='children'>{children}</div>
       </div>
      </div>
    {/* </div> */}
    </>  
  );
}
