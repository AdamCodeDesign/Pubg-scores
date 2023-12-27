import * as React from "react";
import Container from "@mui/material/Container";
import Browser from "./components/Browser";
import PlayerStats from "./components/PlayerStats";
import Matches from "./components/Matches";
import LeaderBoard from "./components/LeaderBoard";


function App() {
  return (
    <>
    <React.Fragment>
      <Container maxWidth="lg">
        <Browser />
        <LeaderBoard />
        <Matches />
      </Container>
    </React.Fragment>
    </>
  );
}

export default App;
