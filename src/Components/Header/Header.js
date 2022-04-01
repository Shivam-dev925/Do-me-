import React from "react";
import "./Header.css";
import { Button } from "../../Styles/Button";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UseAuth } from "../Context/AuthContext";
function Header() {
  const { user, setUser } = UseAuth();

  const HandleLogout = () => {
    setUser("");
  };
  return (
    <Navbar sticky="top" className="Header" expand="md">
      <Container fluid>
        <Navbar.Brand href="#" className=" Brand__name text-white">
          Do me!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav className="Navigation mx-5 ">Features</Nav>
            <Nav className="Navigation mx-5 ">About</Nav>

            <Nav className="Navigation mx-5 ">Help ?</Nav>
          </Nav>
          {!user ? (
            <Link to="/Sign-in">
              <Button
                pd="10px 25px "
                color="#ffffff"
                bg="#7393B3"
                bgHover="#145DA0"
              >
                sign-in
              </Button>
            </Link>
          ) : (
            <Button
              onClick={HandleLogout}
              pd="10px 25px "
              color="#ffffff"
              bg="#7393B3"
              bgHover="#145DA0"
            >
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
