import React from "react";
import {
  createBrowserRouter,
  Routes,
  Route,
  Outlet,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//MUI Container
import Container from "@mui/material/Container";

//Components
import Browser from "./components/Browser";
import LifetimeStats from "./components/LifeTimeStats";
import Error from "./components/Error";
import GameModeStats from "./components/GameModeStats";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Browser />}>
      <Route
        path="/stats/:platformParam/:accountIdParam"
        element={<LifetimeStats />}
      >
        <Route
          path="/stats/:platformParam/:accountIdParam/:mode"
          element={<GameModeStats />}
        />
      </Route>
      <Route path="/error/:status" element={<Error />}></Route>
    </Route>
  )
);

function App() {
  return (
    <Container maxWidth="md">
      {/* <Browser /> */}
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
