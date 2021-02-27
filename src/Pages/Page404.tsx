import React from "react";
import image from "../Assets/path404.jpg";

export const Page404 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem auto",
      }}
    >
      <h1 style={{ color: "#fff", fontSize: "3rem" }}>404</h1>
      <img height="auto" width="350px" src={image} alt="404" />
    </div>
  );
};
