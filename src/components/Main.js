import React from "react";
import { Route, Switch } from "react-router-dom";
import Landingpage from "./Landingpage";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import Aboutme from "./Aboutme";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/portfolio" component={Landingpage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/aboutme" component={Aboutme} />
    </Switch>
  );
};

export default Main;
