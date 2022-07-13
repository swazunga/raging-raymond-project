import React from "react";
import Navigation from "../../components/Navigation";

const Header = (props) => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1>Raging-Raymond!</h1>
      </div>
      <Navigation
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </header>
  );
};

export default Header;
