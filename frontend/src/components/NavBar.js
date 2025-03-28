import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsJunction
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="business">
                  {" "}
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="entertainment">
                  {" "}
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="technology">
                  Technology
                </Link>
              </li>
            </ul>

            {/* Login & Signup Buttons */}
            <div className="d-flex">
              {!isAuthenticated ? ( // Show buttons only if not logged in
                <>
                  <Link className="btn btn-outline-light me-2" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-primary" to="/signup">
                    Signup
                  </Link>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      localStorage.removeItem("token"); // Logout logic
                      window.location.reload(); // Refresh page after logout
                    }}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
