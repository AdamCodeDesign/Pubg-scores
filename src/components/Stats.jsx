import React from "react";
import { Container } from "@mui/material";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import All from "./All";
import SoloFPP from "./SoloFPP";

export default function Stats() {
  return (
    <Container>
      <Routes>
        <Route path="/all" element={<All />}></Route>
        <Route path="/solofpp" element={<SoloFPP />}></Route>
      </Routes>
    </Container>
  );
}
