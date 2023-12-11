import { Route, Switch } from "react-router-dom";
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
// import { Signup } from "./Signup";

function App() {
  const [state, setState] = useState();
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route> */}
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/questions">
          <Questions />
        </Route>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/companies">
          <Companies />
        </Route>
        <Route path="/ask">
          <Ask />
        </Route>
        <Route path="/answer/:id">
          <Answer state={state} setState={setState}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// function ProtectedRoute({ children }) {
//   const token = true;
//   return token ? <section>{children}</section> : <h1>Unauthorized entries</h1>;
// }
