import React from "react";
import { useState, useEffect } from "react";
// import local json file
export const Content = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("content.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setData(myJson);
        console.log("Data", data);
      });
  };
  useEffect(() => {
    getData();
  },);
  console.log("Data-------:", data);
  return (
    <div className="allCards">
      {data.map((item) => (
        <div className="card" key={item.title}>
          <div className="titleAndImg">
            <a href={item.url}>
              <p className="title">{item.title}</p>
              <img className="cardImg" src={item.img} alt={item.imgAlt}></img>
            </a>
          </div>
          <div className="content">
            <p className="contentParagraph"><b>Project type:</b> {item.type}</p>
            <p className="contentParagraph"><b>Description:</b> {item.content}</p>
            <p className="contentParagraph"><b>Contribution:</b> {item.contribution}</p>
            <p className="contentParagraph"><b>Tech:</b> {item.tech}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
