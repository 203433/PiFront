import React from "react";
export default function Footer(props) {
  return (
    <>
      <footer
        style={{ display: "flex", backgroundColor: "#9FCB51", width: "100%" }}
      >
        <div className="container-fluid">
          <div
            style={{ float: "right", display: "flex", alignItems: "center" }}
          >
            <h6 style={{ color: "white", fontWeight: "bold", marginRight:".6rem" }}>Made by</h6>
            <img
              src={props.logo}
              alt="logo"
              className="logo"
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
