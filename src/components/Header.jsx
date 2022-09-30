import React from "react";
import { useState } from "react";
export const Header = () => {
  const [quote, setQuote] = useState(
    "Don't take it from me, what are the FACTS"
  );

  let messageArray = [
    "'You're one of the smartest people I know' - my sister",
    "2x Time magazine 'Person of the Year'",
    "'I think you're doing a great job'- former co-worker",
    "'How do you make that?' -person wondering how I make 3D prints",
    "'你的中文很棒' - my Chinese teacher"
  ];
  function changeMessage() {
    let randomIndex = Math.floor(Math.random() * messageArray.length);
    setQuote(messageArray[randomIndex]);
  }

  return (
    <div className="header">
      <img
        className="headerImg"
        src="/media/21068_640841072445_1843954_n.jpg"
        alt="profile shot of amazing developer"
      ></img>
      <div className="nameInfo">
        <h1>Nic Resch</h1>
        <h1>Software Developer and Project Manager</h1>
      </div>
      <div className="quoteArea">
        <div className="quote">{quote}</div>
        <button onClick={changeMessage}>Change fact</button>
      </div>
    </div>
  );
};
