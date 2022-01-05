import "./App.css";
import Info from "./components/Info";
import Home from "./components/Home";
import Artwork from "./components/Artwork";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">(E.Toney)</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="info">Info</Nav.Link>
            <Nav.Link href="artwork">ArtWork</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/artwork" element={<Artwork />} />
        <Route path="*" element={ErrorPage} />
      </Routes>
    </Router>
  );
}

export default App;
