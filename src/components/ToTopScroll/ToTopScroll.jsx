import React, { memo, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLenis } from '@studio-freight/react-lenis';

const ToTopScroll = ({ textEnter, textLeave}) => {
  let [height, setheight] = useState(0);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".toTopScroll", {
      opacity: 0,
      x: 200,
      stagger:1,
      duration: 1,
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
    });
  }, []);
  useEffect(() => {
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.addEventListener("scroll", (e) => {
      let progressHeight = (window.scrollY / totalHeight) * 100;
      progressHeight = Math.trunc(progressHeight);
      setheight(progressHeight);
      document.querySelector(".scrollbodyInner").style.height = height + "%";
    });
  });
  return (
    <a
    href='#'
      className="toTopScroll flex justify-center flex-col items-center z-10 "
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
      
    >
      <p>TO TOP</p>
      <div className="scrollBody mt-6">
        <div className="scrollbodyInner"></div>
      </div>
    </a>
  );
};

export default memo(ToTopScroll);
