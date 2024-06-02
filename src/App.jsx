import Container from "@mui/material/Container";
import { HashRouter } from "react-router-dom";
import Browser from "./components/Browser";
import Main from "./components/Main";
import Matches from "./components/Matches";
import Footer from "./components/Footer";
import Steam from "./components/Steam";
import ResizeBackground from "./components/ResizeBackground";

function App() {
  return (
    <>
      {/* <ResizeBackground /> */}
      <Container maxWidth="lg" className="container">
        <HashRouter>
          <Browser />
          {/* <Matches /> */}
          <Main />
        </HashRouter>
      </Container>
      {/* <Steam /> */}
      <Footer />
    </>
  );
}

export default App;
