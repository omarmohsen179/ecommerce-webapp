import React from "react";

function LangueNavBar() {
  return (
    <div
      style={{
        height: 38,
        backgroundColor: "#5ba8dc",
        color: "white",
        padding: "8px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "auto",
        }}
        className="container"
      >
        <div> Welcome to our online store </div> <div>العربية </div>
      </div>{" "}
    </div>
  );
}

export default LangueNavBar;
