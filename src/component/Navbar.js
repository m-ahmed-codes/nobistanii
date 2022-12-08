import React from "react";
import logo1 from "../images/stufionew.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <img src={logo1} className="logo d-inline mx-2 my-1" alt="" />
      <div className="row d-inline-flex ">
        <div className="col-12  m-0">
          <ul className="d-inline-flex ms-0 p-0 ">
            <li className="nav-item m-0 d-flex ">
              <Link
                className="nav-link active mx-2 line    font-size text-light list "
                aria-current="page"
                to={`/`}
              >
                HOME
              </Link>
              {/* <hr /> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link font-size  text-light " to={`work`}>
                WORK
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link font-size  text-light " href="#">
                NOW
              </a>
            </li>
          </ul>
          </div>
      </div>
    </>
  );
};

export default Navbar;
