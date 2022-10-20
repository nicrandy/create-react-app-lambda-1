import React from "react";
export const Dicedemic = () => {
  const handleClick = () => {
    window.open("http://dicedemic.com");
  };
  return (
    <div className="dicedemic">
              <p>
        Video game: What happens when you combine Yahtzee, the COVID pandemic and Dark Souls? Dicedemic is what you get! 
        <br></br>Contribution: Programmer and graphic artist.
        <br></br>Tech: Godot, Aesprite
      </p>
      <div className="nameAndImg">
      <a href="http://dicedemic.com">

        <p>Dicedemic</p>
          <img
            src="/media/dicedemic.png"
            alt="person doing a yoga pose"
            onClick={handleClick}
          ></img>
        </a>
      </div>


    </div>
  );
};
