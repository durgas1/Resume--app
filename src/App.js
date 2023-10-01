import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import About from "./components/About";
import Footerpage from "./components/Footerpage";
import Delete from "./Deletepage/Delete";
import View from "./components/viewpage/View";
import Edit from "./components/Editpage/Edit";

function App() {
  return (
    <div>
      <Router>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <h5>
              <Navbar.Brand>Resume Builder</Navbar.Brand>
            </h5>
            <Nav className="me-auto">
              <div className="margin">
                <Button href="/" variant="outline-primary" className="button">
                  Home
                </Button>
                <Button href="/about" variant="outline-primary">
                  Creat new
                </Button>
              </div>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>

          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/delete" element={<Delete />}></Route>

          <Route exact path="/about" element={<About />}></Route>

          <Route exact path="/view" element={<View />}></Route>
          <Route exact path="/edit" element={<Edit />}></Route>
        </Routes>
      </Router>
      <Footerpage />
    </div>
  );
}

export default App;
