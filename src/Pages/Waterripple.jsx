import React, { useEffect } from 'react'

const Waterripple = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".ripple-element").ripples({
        resolution: 200,
        perturbance: 0.005,
      });
    });
  }, []);
  return (
    <div className="ripple-element"></div>
    )
}

export default Waterripple;