import React from "react";
import Container from "@mui/material/Container";
import Browser from "./components/Browser";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LifetimeStats from "./components/LifeTimeStats";
import Error from "./components/Error";
import GameModeStats from "./components/GameModeStats";

function App() {
  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Browser />
        <Routes>
          <Route
            path="/stats/:platformParam/:accountIdParam"
            element={<LifetimeStats />}
          ></Route>
          <Route path="/error/:status" element={<Error />}></Route>
          <Route
            path="/stats/:platformParam/:accountIdParam/:mode"
            element={<GameModeStats />}
          />
        </Routes>
        <Routes></Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
