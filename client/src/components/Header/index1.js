import React from "react";
import Navigation from "../../components/Navigation";

const Header = (props) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">Raging Raymond</span>
        <Navigation
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
        />
      </div>
    </nav>
  );
};

export default Header;
