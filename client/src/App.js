import React from "react";
import HomePage from "./Pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Components/Header"
import WorldPage from "./Pages/WorldPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/world" component={WorldPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
