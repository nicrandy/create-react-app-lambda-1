import React from "react";
export const Myogai = () => {
  const handleClick = () => {
    window.open("http://myogai.com");
  };
  return (
    <div className="myogai">
      <div className="nameAndImg">
      <a href="http://myogai.com">

        <p>Myogai</p>
          <img
            src="https://i.pinimg.com/originals/64/41/61/644161b5ce15397473f2c4a49620ee8f.gif"
            alt="person doing a yoga pose"
            onClick={handleClick}
          ></img>
        </a>
      </div>

      <p>
        The worlds most advanced yoga training platform. Blazepose cutting edge human pose estimation network combined with our secret method to calculate joint angles in 3D space.
        <br></br>Contribution: Project manager and
        lead AI developer
        <br></br>Tech: React, Supabase, Mediapipe
      </p>
    </div>
  );
};
