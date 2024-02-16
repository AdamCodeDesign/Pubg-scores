import Container from "@mui/material/Container";
import { HashRouter} from "react-router-dom";
import Browser from "./components/Browser";
import Main from "./components/Main";
import Matches from "./components/Matches";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Container maxWidth="lg">
      <HashRouter>
        <Browser />
        <Main />
        {/* <Matches /> */}
      </HashRouter>
    </Container>
      <Footer/>
    </>
  );
}

export default App;
