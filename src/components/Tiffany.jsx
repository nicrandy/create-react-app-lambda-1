import React from "react";
export const Tiffany = () => {
  const handleClick = () => {
    window.open("https://github.com/nicrandy/tiffainy_track_cam");
  };
  return (
    <div className="tiffany">
      <div className="nameAndImg">
      <a href="https://github.com/nicrandy/tiffainy_track_cam">

        <p>Tiffany</p>
          <img
            src="https://i.ibb.co/qRtv1fY/Tiffany.png"
            alt="tiffany tracking camera"
            onClick={handleClick}
          ></img>
        </a>
      </div>

      <p>
        The world's only open source tracking camera. Designed to be used with the Luxonis OAK camera, but also compatible with any webcam. This tracking camera can move up-down-left-right to follow the user and record video for a presentation or other event.        
        <br></br>Contribution: Project manager, designer and
        lead developer
        <br></br>Tech: Python, Arduino, 3D printing, OpenCV, Luxonis OAK
      </p>
    </div>
  );
};


