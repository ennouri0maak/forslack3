import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "../src/components/about";
import Contact from "./components/Contact";
import Navbar from "../src/components/navbar";
import Home from "../src/components/home";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </div>
    </Router>

  );
}




const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
