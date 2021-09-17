import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo"></div>
            <div className="nav-btns"></div>
          </nav>

          <div className="center-container">
            <h1 className="primary-heading"></h1>
            <h3 className="sub-heading"></h3>
            <h5 className="small-heading"></h5>

            <div className="input-container">
              <input type="text" />
              <button type="submit"></button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
