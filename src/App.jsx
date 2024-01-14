import React from "react";
import Container from "@mui/material/Container";
import Browser from "./components/Browser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LifetimeStats from "./components/LifeTimeStats";
import Error from "./components/Error";

function App() {
  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Browser />
        <Routes>
          <Route
            path="/stats/:platformParam/:accountIdParam"
            element={<LifetimeStats />}
          />
          <Route path="/error/:status" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
