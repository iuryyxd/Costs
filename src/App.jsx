import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Container customClasses="min-height">
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/newproject">
            <NewProject />
          </Route>
        </Container>
      </Switch>
      
      <Footer />
    </Router>
  );
}

export default App;
