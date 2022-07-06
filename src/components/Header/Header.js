import React from "react";
import user from "./user.png";
import "./Header.css";

const Header = () => {
  return (
      <div className="header">
        <div className="logo">
            Movie App
        </div>

        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
  );
};
export default Header;
