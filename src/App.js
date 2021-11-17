import "./App.css";
// import { PriceCard } from './PriceCard';
// import {  useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { UserDetails } from "./UserDetails";
// import {Dashboard} from "./Dashboard";
import { AddUser } from "./AddUser";
import { EditRow } from "./EditRow";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <div className="user-navbar">
        <Button
          color="inherit"
          variant="text"
          className="navbar-btn"
          onClick={() => history.push("/user")}
        >
          User
        </Button>

        <Button
          color="inherit"
          variant="text"
          className="navbar-btn"
          onClick={() => history.push("/adduser")}
        >
          AddUser
        </Button>
      </div>
      <Switch>
        <Route exact path="/user/edit/:id">
          <EditRow />
        </Route>

        <Route path="/user">
          <UserDetails />
        </Route>
        <Route path="/adduser">
          <AddUser />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
