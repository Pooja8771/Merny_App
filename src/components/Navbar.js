import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

import "../style.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate("./profile");
  };
  const handlelogout = () => {
    Cookies.remove('jwt');
    navigate("./");
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav>
      <div className="nav-wrapper" style={{ backgroundColor: "#06d6a0" }}>
        <Link to="/" className="brand-logo left text-decoration-none">
          MERNY
        </Link>
        <ul id="nav-mobile" className="right">
          <li className="search">
            <div className="input-group">
              <input
                type="search"
                id="SearchInput"
                className="form-control"
                placeholder="Enter to Search"
                style={{ width: "500px" }}
              />
            </div>
          </li>
          <li>
            <Link to="/homepage">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
                alt="homepage"
              />
            </Link>
          </li>
          <li>
            <Link to="/chatbox">
              <img
                src="https://static.thenounproject.com/png/5293238-200.png"
                alt="chatbox"
              />
            </Link>
          </li>
          <li>
            <Link to="/notification">
              <img
                src="https://cdn-icons-png.flaticon.com/512/565/565422.png"
                alt="notify"
              />
            </Link>
          </li>
          <li>
            <div className="user_icon" onClick={toggleLinks}>
              <img
                src="https://freesvg.org/img/abstract-user-flat-4.png"
                alt="usericon"
              />
              {showLinks && (
                <div className="user-links">
                  <Link to="/profile">
                    <button onClick={handleProfile}>Profile</button>
                  </Link>

                  <Link to="/ ">
                    <button onClick={handlelogout}>Logout</button>
                  </Link>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
