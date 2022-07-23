import React from "react";

export const JavaScriptDays = () => {
  let javascriptPosts = [];
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div id='postContainer'></div>`
  );
  document.getElementById("postContainer").style.textAlign = "center";
  fetch("http://localhost:3000/api/getAll")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].categories.includes("DaysofJavaScript")) {
          javascriptPosts.push(data[i]);

          document
            .getElementById("postContainer")
            .insertAdjacentHTML(
              "beforeend",
              `<div id='${data[i].title} ${data[i].date}' style='cursor: pointer'></div>`
            );

          document.getElementById(
            `${data[i].title} ${data[i].date}`
          ).style.margin = "50px";
          document.getElementById(
            `${data[i].title} ${data[i].date}`
          ).style.height = "200px";
          document.getElementById(
            `${data[i].title} ${data[i].date}`
          ).style.width = "200px";

          document.getElementById(
            `${data[i].title} ${data[i].date}`
          ).style.border = "solid";
          document.getElementById(
            `${data[i].title} ${data[i].date}`
          ).style.borderColor = "black";
          document.getElementById(
            `${data[i].title} ${data[i].date}`
          ).style.borderWidth = "1px";

          document.getElementById(
            `${data[i].title} ${data[i].date}`
          ).style.display = "inline-flex";
          document.getElementById(
            `${data[i].title} ${data[i].date}`
          ).style.flexDirection = "column";
          document.getElementById(
            `${data[i].title} ${data[i].date}`
          ).style.justifyContent = "flex-end";
          document.getElementById(
            `${data[i].title} ${data[i].date}`
          ).style.alignItems = "center";

          //
          document.getElementById(
            `${data[i].title} ${data[i].date}`
          ).innerHTML = `<h4 style=' font-family: "Righteous"; font-size: 32px;' >${data[i].title}</h4>
                       <h6 style='font-family: "Righteous";' >${data[i].date}</h6>                      
                       <img src='${data[i].img}' style='width: 200px; ' />
                      `;
          //

          document.getElementById(`${data[i].title} ${data[i].date}`).onclick =
            function () {
              document.getElementById(`postContainer`).innerText = "";
              document.getElementById("postContainer").style.borderRadius =
                ".25rem";

              document.getElementById("postContainer").style.backgroundColor =
                "white";

              document.getElementById("postContainer").style.margin = "auto";
              document.getElementById("postContainer").style.marginBottom =
                "50px";

              document.getElementById("postContainer").style.width = "60%";
              document.getElementById("postContainer").style.display = "flex";
              document.getElementById("postContainer").style.flexDirection =
                "column";

              //
              document
                .getElementById("postContainer")
                .insertAdjacentHTML("beforeend", `<img id='img'></img>`);
              document.getElementById("img").src = `${data[i].img}`;
              document.getElementById("img").style.borderRadius = `.25rem`;

              document
                .getElementById("postContainer")
                .insertAdjacentHTML(
                  "beforeend",
                  `<h1 id='title' style='font-family: Righteous; font-size: 32px; letter-spacing: 1px;'></h1>`
                );
              document.getElementById("title").innerText = `${data[i].title}`;
              document.getElementById("title").style.marginTop = "20px";
              document
                .getElementById("postContainer")
                .insertAdjacentHTML("beforeend", `<h3 id='date'></h3>`);
              document.getElementById("date").innerText = `${data[i].date}`;
              document.getElementById("date").style.fontFamily = "Righteous";
              document.getElementById("date").style.fontSize = "1rem";
              document.getElementById("date").style.color = "gray";

              document
                .getElementById("postContainer")
                .insertAdjacentHTML(
                  "beforeend",
                  `<p id='entry' style='margin-bottom: 0;' ></p>`
                );
              document.getElementById("entry").innerText = `${data[i].entry}`;
              document.getElementById("entry").style.marginBottom = "20px";
            };
        }
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return <div></div>;
};
