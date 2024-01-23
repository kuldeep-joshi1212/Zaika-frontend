import React, { useState } from "react";
import "./Navbar.scss";



export default function Navbar() {
  const [isRotated, setRotated] = useState(false);

const handleRotation = () => {
  setRotated(!isRotated);
};

  return (
    <div>
      <nav className="navbar">
        <div>
          <img
            className={`logo ${isRotated ? 'rotated' : ''}`}
            onClick={handleRotation}
            src="../assets/logo.png"
            alt="logo"
          />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="user-details">
          <div className="btns">
            <button className="btn login">Login</button>
            <button className="btn signup">Sign Up</button>
          </div>
          <div className="profile">
            <img src="../assets/photo.png" />
          </div>
        </div>
      </nav>
    </div>
  );
}
