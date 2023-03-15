import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Navbar1() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="/">Randomfy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/favourites">Favourites</Nav.Link>
            <Nav.Link href="/songofthehour">Song of the Hour</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {user && (
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div>
                <span>{user.email}</span>
                <button onClick={handleClick}>Log out</button>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        )}

        {!user && (
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="/login">Login</a>
              <br></br>
              <a href="/signup">Sign Up</a>
            </Navbar.Text>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
}

export default Navbar1;
