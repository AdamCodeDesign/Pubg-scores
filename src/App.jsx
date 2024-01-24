import React from "react";
import Container from "@mui/material/Container";
import Browser from "./components/Browser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LifetimeStats from "./components/LifeTimeStats";
import Error from "./components/Error";
import Season from "./components/Season";

function App() {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Browser />
        <Routes>
          <Route
            path="/stats/:platformParam/:accountIdParam"
            element={<LifetimeStats />}
          />
          <Route path="/error/:status" element={<Error />} />
        </Routes>
      </BrowserRouter>
      {/* <Season/> */}
    </Container>
  );
}

export default App;
