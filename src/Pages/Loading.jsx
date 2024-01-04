import React from "react";
import Loadingimg from "../assets/Loading.gif"; // Adjust path accordingly

const Loading = () => {
  return (
    <div
      id="loading"
      className="w-full h-screen flex justify-center bg-white items-center fixed z-50 top-0 left-0"
    >
      <img src={Loadingimg} alt="laodingimg"  className="w-40"/>
    </div>
  );
};

export default Loading;
