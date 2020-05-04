import React from 'react';
import "./css/style.css"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/nav"
import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
import Container from "react-bootstrap/Container";
import Contacts from "./pages/contact";

function App() {
  return (
    <HashRouter basename="/portfolio">
      <div>
        <Nav fixed="top"/>
        <Container>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" exact component={Portfolio}/>
          <Route path="/contact" exact component={Contacts}/>
        </Switch>
        </Container>
      </div>
    </HashRouter>
  );
}

export default App;
