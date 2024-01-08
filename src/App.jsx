import * as React from "react";
import Container from "@mui/material/Container";
import Browser from "./components/Browser";
import Matches from "./components/Matches";
import LifetimeStats from "./components/LifeTimeStats";
import Season from "./components/Season";
import Stats from "./components/Stats";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container maxWidth="lg">
      <Router>
        <Browser />
        <Stats />
      </Router>

      {/* <Season /> */}
      {/* <LifetimeStats accountId="account.61a88fdd49e641408d15e6210e6db699"/> */}
      {/* <Matches /> */}
    </Container>
  );
}

export default App;
