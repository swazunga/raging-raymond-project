import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className="nav-tabs">
        <li className="nav-item">
          <a
            href="#About"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#FishTopic"
            onClick={() => handlePageChange("FishTopic")}
            className={
              currentPage === "FishTopic" ? "nav-link active" : "nav-link"
            }
          >
            Fish Topics
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#VampTopic"
            onClick={() => handlePageChange("VampTopic")}
            className={
              currentPage === "VampTopic" ? "nav-link active" : "nav-link"
            }
          >
            VAMP2 Topics
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Registration"
            onClick={() => handlePageChange("Registration")}
            className={
              currentPage === "Registration" ? "nav-link active" : "nav-link"
            }
          >
            Register for Fishing Tournament
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Gallery"
            onClick={() => handlePageChange("Gallery")}
            className={
              currentPage === "Gallery" ? "nav-link active" : "nav-link"
            }
          >
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Donations"
            onClick={() => handlePageChange("Dontations")}
            className={
              currentPage === "Donations" ? "nav-link active" : "nav-link"
            }
          >
            Donate!
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
