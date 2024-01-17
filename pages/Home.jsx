import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1></h1>
      <p className="headline">
        <a href="https://www.dhiwise.com">Click the below button to see the page</a>
      </p>
      <ul>
        <li>
          <Link to="/desktopnine">DesktopNine</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
