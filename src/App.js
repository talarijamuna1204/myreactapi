import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import AnimeView from "./components/pages/AnimeView";
import UserList from "./components/pages/UserList";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
        
          <Route exact path="/about" component={About} />
          <Route exact path="/userlist" component={UserList} />
          <Route exact path="/users/add" component={AddUser} />          
          <Route exact path="/anime/:id" component={AnimeView} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
