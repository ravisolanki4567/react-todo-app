import React from "react";

const Header = ({ todoCounts }) => {
  return (
    <div>
      <h1> Todo React App </h1>
      <p>Total Tods : {todoCounts}</p>
    </div>
  );
};

export default Header;
