import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.h1`
  display: flex;
  justify-content: center;
  color: gray;
  font-family: "Audiowide";
  font-size: "36px";
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
    1px 1px 0 black;
  width: 100%;
`;

export const BlogLogo = () => {
  return (
    <Container>
      <Link style={{ color: "gray", textDecoration: "none" }} to="/">
        Jovany Blogs Code
      </Link>
    </Container>
  );
};
