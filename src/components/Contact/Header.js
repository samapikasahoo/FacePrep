import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-end">
      <Nav className="ml-auto">
        <Navbar.Brand>
          <Link to="/">
            <Button variant="primary" type="submit">
              LogOut
            </Button>
          </Link>
        </Navbar.Brand>
      </Nav>
    </Navbar>
  );
};

export default Header;
