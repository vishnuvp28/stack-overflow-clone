import { Route, Routes} from "react-router-dom";
import "./App.css";
import { Questions } from "./Questions";
import { Tags } from "./Tags";
import { Users } from "./Users";
import { Companies } from "./Companies";
import { Home } from "./Home";
// import { Login } from "./Login";
import { Ask } from "./Ask";
import Answer from "./Answer";
import { useState } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
// import { Signup } from "./Signup";

function App() {
  const [state, setState] = useState();
  return (
    <div className="App">
      <Routes>
        <Route exact path="/"
          element={<Signup/>}
       />
        <Route path="/login"
          element={<Login />}
        />
            <Route path="/home"
          element={<Home />}
        />
             <Route path="/questions"
          element={<Questions />}
        />
            <Route path="/tags"
          element={<Tags />}
        />
            <Route path="/users"
          element={<Users />}
        />
            <Route path="/companies"
          element={<Companies />}
        />
           <Route path="/ask"
          element={<Ask />}
        />
        <Route path="/answer/:id"
          element={<Answer state={state} setState={setState}/>}
      />
      </Routes>
    </div>
  );
}

export default App;

// function ProtectedRoute({ children }) {
//   const token = true;
//   return token ? <section>{children}</section> : <h1>Unauthorized entries</h1>;
// }
