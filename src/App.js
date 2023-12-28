import React, { useEffect, useRef, useState } from "react";
import "./Scss/App.scss";
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import ToTopScroll from "./components/ToTopScroll/ToTopScroll";
import { motion } from "framer-motion";
import Testimonial from "./Pages/Testimonial";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer/Footer";
import {ReactLenis} from '@studio-freight/react-lenis';
import Loading from "./Pages/Loading";

const App = () => {
 
  const [mousePointer, setmousePointer] = useState(false);
  const [mousePosition, setmousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setcursorVariant] = useState("default");
  useEffect(() => {
    if (window.innerWidth > 767) {
      setmousePointer(true);
    }
    const mousemove = (e) => {
      setmousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    text: {
      height: 100,
      width: 100,
      transition: 1,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#01b4ff",
      opacity: 0.1,
      border: "none",
      top: 0,
      left: 0,
    },
  };
  const textEnter = () => setcursorVariant("text");
  const textLeave = () => setcursorVariant("default");
  //loading page
  const [isLoading, setIsLoading] = useState(true);
  window.onload = function() {
    setIsLoading(false);
  }
 
  
  return (
   
    <>
{isLoading&&<Loading/>}
      <Header textEnter={textEnter} textLeave={textLeave} />
      <ToTopScroll textEnter={textEnter} textLeave={textLeave} />
      {mousePointer && (
        <motion.div
          className="cursor flex justify-center items-center"
          variants={variants}
          animate={cursorVariant}
          transition={{ duration: 0.1 }}
        ></motion.div>
      )}
      {mousePointer && (
        <motion.div
          className="center"
          variants={variants}
          animate={cursorVariant}
          transition={{ duration: 0 }}
        ></motion.div>
      )}

      <Home textEnter={textEnter} textLeave={textLeave} />
      <About textEnter={textEnter} textLeave={textLeave} />
      <Project textEnter={textEnter} textLeave={textLeave} />
      <Testimonial />
      <Contact textEnter={textEnter} textLeave={textLeave}/>
      <Footer textEnter={textEnter} textLeave={textLeave}/>
    </>
  );
};
export default App;
