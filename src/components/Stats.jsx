import React from "react";
import { Container } from "@mui/material";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import All from "./All";


export default function Stats() {
  return (
    <Container>
        <Routes>
          <Route path="/all" element={<All />}></Route>
        </Routes>
    </Container>
  );
}
