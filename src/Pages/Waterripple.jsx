import React, { memo, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Waterripple = ({ handlePlayPause,isPlaying }) => {
  useEffect(() => {
    $(document).ready(function () {
      $(".ripple-element").ripples({
        resolution: 200,
        perturbance: 0.005,
      });
    });
  }, []);
  const notify = () => toast.warning("If you want to stop music click again water canvas");

  return (
    <>
    <div
      className="ripple-element"
      onClick={handlePlayPause}
      onMouseUp={notify}
    ></div>
    {isPlaying&&<ToastContainer />}
    </>
    
  );
};

export default memo(Waterripple);
