import React, { memo, useEffect } from 'react'

const Waterripple = ({handlePlayPause}) => {
  useEffect(() => {
    $(document).ready(function () {
      $(".ripple-element").ripples({
        resolution: 200,
        perturbance: 0.005,
      });
    });
  }, []);

  return (
    <div className="ripple-element" onClick={handlePlayPause}></div>
    )
}

export default memo(Waterripple);