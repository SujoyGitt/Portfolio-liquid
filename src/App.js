import React, { useEffect, useState } from "react";
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
import Loading from "./Pages/Loading";
import musicFile from './assets/dripping-water-nature-sounds-8050.mp3'; 
import Waterripple from "./Pages/Waterripple";

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
      border: "0px solid transparent",
      top: 0,
      left: 0,
    },
  };
  const textEnter = () => setcursorVariant("text");
  const textLeave = () => setcursorVariant("default");
  //loading page
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
// add music 
const [audioPlayer, setAudioPlayer] = useState(new Audio(musicFile));
const [isPlaying, setIsPlaying] = useState(false);

const handlePlayPause = () => {
  if (isPlaying) {
    audioPlayer.pause();
  } else {
    audioPlayer.play();
    alert("if you stop music click again water canvas")
  }
  setIsPlaying(!isPlaying);
};

  return (
    <>
      {isLoading && <Loading />}
      <Waterripple handlePlayPause={handlePlayPause}/>
      <Header textEnter={textEnter} textLeave={textLeave} handlePlayPause={handlePlayPause}/>
      <ToTopScroll textEnter={textEnter} textLeave={textLeave} handlePlayPause={handlePlayPause}/>
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

      <Home textEnter={textEnter} textLeave={textLeave} handlePlayPause={handlePlayPause}/>
      <About textEnter={textEnter} textLeave={textLeave} handlePlayPause={handlePlayPause}/>
      <Project textEnter={textEnter} textLeave={textLeave} handlePlayPause={handlePlayPause}/>
      <Testimonial />
      <Contact textEnter={textEnter} textLeave={textLeave} handlePlayPause={handlePlayPause}/>
      <Footer textEnter={textEnter} textLeave={textLeave} handlePlayPause={handlePlayPause} />
    </>
  );
};
export default App;
