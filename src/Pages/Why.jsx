import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import { whyPosts } from "../tempData";
import { BlogLogo } from "../Components/BlogLogo";
import { BlogNav } from "../Components/BlogNav";

export const Why = () => {
  document.body.insertAdjacentHTML(
    "beforeend",
    '<div id="postContainer"></div>'
  );
  document.getElementById("postContainer").innerText = "";
  return (
    <div>
      <Card
        style={{
          margin: "auto",
          marginBottom: "50px",
          width: "60%",
        }}
      >
        <Card.Img variant="top" src={whyPosts[whyPosts.length - 1].img} />
        <Card.Body
          style={{
            alignItems: "center",
            display: "flex",

            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Card.Title
            style={{
              fontFamily: "Bebas Neue",
              fontSize: "32px",
              letterSpacing: "1px",
            }}
          >
            {whyPosts[whyPosts.length - 1].title}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {whyPosts[whyPosts.length - 1].date}
          </Card.Subtitle>
          <Card.Text>{whyPosts[whyPosts.length - 1].entry}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
