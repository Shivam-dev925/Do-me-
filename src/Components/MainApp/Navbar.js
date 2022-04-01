import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  faBars,
  faBarsStaggered,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
function NavbarHorizontal({ HandleDrawer }) {
  const Data = [
    { icon: faBarsStaggered, name: "Dashboard" },

    { icon: faFolder, name: "Collections" },
  ];
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <FontAwesomeIcon
            onClick={HandleDrawer}
            className="text-white mx-3"
            style={{ width: "2rem", height: "1.3rem", fontWeight: "400" }}
            icon={faBars}
          />
          <Nav className="me-auto">
            {Data?.map((item, idx) => {
              return (
                <Nav.Link key={idx}>
                  <FontAwesomeIcon className="mx-2 hover" icon={item.icon} />
                  {item.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHorizontal;
