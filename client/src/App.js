import React from 'react';
import "./css/style.css"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav"
import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
import Container from "react-bootstrap/Container";
import Contacts from "./pages/contact";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Nav fixed="top"/>
        <Container>
        <Switch>
          <Route exact path="/projects" component={Portfolio}/>
          <Route exact path="/contact" component={Contacts}/>
          <Route exact path="/" component={Home} />
        </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
