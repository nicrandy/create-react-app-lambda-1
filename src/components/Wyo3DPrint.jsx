import React from "react";
export const Wyo3D = () => {
  const handleClick = () => {
    window.open("https://wyo3dprint.com/");
  };
  return (
    <div className="wyo3D" id="card">
      <p>
        3D printing: Custom designs including animal skulls, lithophanes, signage, hat buckles and more. Specializing in the making the world's most realistic 3D printed terrains.
        <br></br>Contribution: Owner and maker
        <br></br>Tech: 3D printing, painting, 3D modeling and design
      </p>
      <div className="nameAndImg">
        <a href="https://wyo3dprint.com/">
          <p id="wyo3dTitle">Wyo3DPrint</p>
          <img
            src="https://i.ibb.co/JQKzHdd/Screenshot-18.png"
            alt="tiffany tracking camera"
            onClick={handleClick}
          ></img>
        </a>
      </div>
    </div>
  );
};
