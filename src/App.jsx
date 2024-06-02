import Container from "@mui/material/Container";
import { HashRouter } from "react-router-dom";
import Browser from "./components/Browser";
import Main from "./components/Main";
import Matches from "./components/Matches";
import Footer from "./components/Footer";
import Steam from "./components/Steam";
import '..//main.css'

function App() {
  return (
    <div className="container">
      <Container maxWidth="lg">
        <HashRouter>
          <Browser />
          {/* <Matches /> */}
          <Main />
        </HashRouter>
      </Container>
      {/* <Steam /> */}
      <Footer />
    </div>
  );
}

export default App;
