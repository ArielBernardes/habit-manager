import { Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Groups from "../Pages/Groups";
import About from "../Pages/About";
import Habits from "../Pages/Habits";
import Community from "../Pages/Community";
import Activities from "../Pages/Activities";
import NotFound from "../Pages/NotFound";

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/habits">
        <Habits />
      </Route>
      <Route exact path="/groups">
        <Groups />
      </Route>
      <Route exact path="/activities">
        <Activities />
      </Route>
      <Route exact path="/community">
        <Community />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
