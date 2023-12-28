import React, { useEffect, useRef } from "react";
import Avater from "../assets/profile.jpg";
import HtmlPng from "../assets/free-html-5728485-4781249.png";
import JsPng from "../assets/free-javascript-9294848-7577991.png";
import ReactPng from "../assets/free-react-9294867-7578010.png";
import Waterripple from "./Waterripple";
const Home = ({ textEnter, textLeave }) => {
  return (
    <div className="Hero-section flex justify-center items-center">
      <div className="drop one"></div>
      <div className="drop two"></div>
      <div className="drop three"></div>
      <Waterripple />
      <div className="home-container flex items-center py-28 md:py-0">
        <div className="container-left w-full md:w-7/12">
          <h2 className="text-themeOrange text-3xl font-bold">Hello, I'm</h2>
          <h1 className="text-5xl font-bold py-6 text-themBlack">
            Sujoy Ghosal
          </h1>
          <p className="intro-text font-semibold text-xl opacity-75">
            A <span className="text-slate-500 profession">
              Front-end Devoloper </span>From <span className="formIndia"> India</span>
          </p>

          <p className="py-6 text-gray-500 text-lg">
            I'm Front-end Devoloper based in Burdwan, and I'm very passionate
            and dedicated to my work.
          </p>

          <a
            href="#about"
            className="about-me"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            About Me
          </a>
        </div>
        <div className="container-right w-full md:w-5/12 flex justify-center items-center relative">
          <div className="avater-element">
            {/* <img src={Avater} alt="avater" className="avater w-full h-full object-cover" /> */}
          </div>
          <div className="htmlpng absolute w-16 ">
            <img classna src={HtmlPng} alt="htmlpng" />
          </div>
          <div className="reactpng absolute w-16 ">
            <img classna src={ReactPng} alt="reaact" />
          </div>
          <div className="javascriptpng absolute w-16 ">
            <img classna src={JsPng} alt="javascript" />
          </div>
        </div>
      </div>
      <a
      href="#about"
        className="mouse"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      ></a>
    </div>
  );
};

export default Home;
