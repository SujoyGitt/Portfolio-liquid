import React, { useEffect } from "react";
import Loadimg from "../assets/Loading.gif";

const Loading = () => {

 
  return (
    <div
      id="loading"
      className="w-full h-screen flex justify-center bg-white items-center fixed z-50 top-0 left-0"
    >
      <img src={Loadimg} alt="loading" className="w-48" />
    </div>
  );
};

export default Loading;
