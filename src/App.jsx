import Container from "@mui/material/Container";
import { BrowserRouter} from "react-router-dom";
import Browser from "./components/Browser";
import Main from "./components/Main";


function App() {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Browser />
        <Main/>
      </BrowserRouter>
    </Container>
  );
}

export default App;
