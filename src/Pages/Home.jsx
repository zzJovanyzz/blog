import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

export const Home = () => {
  document.body.insertAdjacentHTML(
    "beforeend",
    '<div id="postContainer" ></div>'
  );
  document.getElementById("postContainer").innerText = "";
  document.getElementById("postContainer").style.border = "none";

  fetch("http://localhost:3000/api/getAll")
    .then((response) => response.json())
    .then((data) => {
      document.body.insertAdjacentHTML("beforeend", `<img />`);
      document.getElementsByTagName("img")[0].src = data[data.length - 1].img;

      // img.src = `${data[data.length - 1].img}`;
      document.body.insertAdjacentHTML("beforeend", `<h1 id='title' />`);
      document.getElementById("title").innerText = data[data.length - 1].title;
      // title.innerText = data[data.length - 1].title;
      document.body.insertAdjacentHTML("beforeend", `<h3 id='date' />`);
      document.getElementById("date").innerText = data[data.length - 1].date;
      // date.innerHTML = data[data.length - 1].date;
      document.getElementById("entry").innerText = data[data.length - 1].entry;
      // entry.innerHTML = data[data.length - 1].entry;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return (
    <div>
      <Card
        style={{
          margin: "auto",
          width: "60%",
        }}
      >
        <Card.Img id="myImg" variant="top" src="$" />
        <Card.Body
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Card.Title
            id="title"
            style={{
              fontFamily: "Righteous",
              fontSize: "32px",
              letterSpacing: "1px",
            }}
          ></Card.Title>
          <Card.Subtitle id="date" className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text id="entry"></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
