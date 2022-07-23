import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BlogNav = () => {
  return (
    <Container>
      <Nav
        expand="lg"
        style={{ fontSize: "22px", textDecoration: "none" }}
        fill="true"
        variant="tabs"
      >
        <Link
          style={{
            color: "black",
            display: "flex",
            textDecoraton: "none",
            alignItems: "center",
          }}
          to="/"
        >
          <Nav.Item>Home</Nav.Item>
        </Link>
        <NavDropdown title="Blog Library" id="nav-dropdown">
          <NavDropdown.Item as="a" href="/100daysofjavascript">
            100 Days Of JavaScript
          </NavDropdown.Item>
          <NavDropdown.Item as="a" href="/toolsbyme">
            Tools I've built
          </NavDropdown.Item>
          <NavDropdown.Item as="a" href="/allposts">
            All Blogs
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as="a" href="/why">
            WHY?
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>
  );
};
