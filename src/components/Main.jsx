import { Route, Routes } from "react-router-dom";
import LifetimeStats from "./LifeTimeStats";
import Error from "./Error";
import Home from "./Home";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/stats/:platformParam/:accountIdParam"
        element={<LifetimeStats />}
      />
      <Route path="/error/:status" element={<Error />} />
    </Routes>
  );
}
