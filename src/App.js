import "./App.css";
import { useState, React } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Data from "./data";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./home";
import Details from "./details";

function App() {
  const [shoes, changeShoes] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to="/">
              <h4 className="nav-text">Shoe Shop</h4>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link" to="/">
                <span className="nav-text">Home</span>
              </Nav.Link>
              <Nav.Link className="nav-link" to="/">
                <span className="nav-text">Details</span>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home shoes={shoes} />
        </Route>

        <Route exact path="/details/:id">
          <Details shoes={shoes} />
        </Route>

        {/* <Route path="/:id">
          <div>didididi</div>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
