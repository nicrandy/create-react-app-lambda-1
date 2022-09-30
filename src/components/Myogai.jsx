import React from "react";
export const Myogai = () => {
  return (
    <div className="myogai">
      <div className="nameAndImg">
        <p>Myogai</p>
        <img
          src="https://i.pinimg.com/originals/64/41/61/644161b5ce15397473f2c4a49620ee8f.gif"
          alt="person doing a yoga pose"
          onClick={()=> window.open("www.myogai.com", "_blank")}
        ></img>
      </div>
      <p>The worlds most advanced yoga training platform. Built in React and also using Supabase and Mediapipe. <br></br>Contribution: Project manager and lead developer for application.</p>
    </div>
  );
};
