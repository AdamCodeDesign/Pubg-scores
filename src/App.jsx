import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Browser from "./components/Browser";
import PlayerStats from "./components/PlayerStats";
import Matches from "./components/Matches";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Browser />
        <PlayerStats />
        <Matches />
      </Container>
    </React.Fragment>
  );
}

export default App;
