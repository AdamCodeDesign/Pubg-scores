import * as React from "react";
import Container from "@mui/material/Container";
import Browser from "./components/Browser";
import PlayerStats from "./components/PlayerStats";
import Matches from "./components/Matches";
import LeaderBoard from "./components/LeaderBoard";
import LifetimeStats from "./components/LifeTimeStats";
import Season from "./components/Season";

function App() {
  return (
    <Container maxWidth="lg">
      <Browser />
      {/* <PlayerStats /> */}
      <Season />
      {/* <LifetimeStats accountId="account.61a88fdd49e641408d15e6210e6db699"/> */}
      {/* <LeaderBoard /> */}
      {/* <Matches /> */}
    </Container>
  );
}

export default App;
