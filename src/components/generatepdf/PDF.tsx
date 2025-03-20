"use client";

import React from "react";
import TopImage from "./TopImage";

function BackgroundComponent() {
  const style = { 
    backgroundImage: "url('/FondoPDF.png')", 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    height: "100vh", 
    width: "100vh"
  };

  return <div style={style}>
    <TopImage />
  </div>;
}

export default BackgroundComponent;



