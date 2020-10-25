import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Help from "./HelpComponent";
import Join from "./JoinComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/joinus" component={Join} />
          <Route exact path="/howyoucanhelp" component={Help} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
