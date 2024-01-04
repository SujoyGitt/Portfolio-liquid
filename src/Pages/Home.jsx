import React, { memo } from "react";
import HtmlPng from "../assets/free-html-5728485-4781249.webp";
import JsPng from "../assets/free-javascript-9294848-7577991.webp";
import ReactPng from "../assets/free-react-9294867-7578010.webp";


const Home = ({ textEnter, textLeave }) => {
 let text= "I'm Front-end Devoloper based in Burdwan, and I'm very passionate and dedicated to my work.";
 console.log('child run');
  return (
    <div className="Hero-section flex justify-center items-center">
      <div className="drop one"></div>
      <div className="drop two"></div>
      <div className="drop three"></div>
    
      <div className="home-container flex items-center py-28 md:py-0">
        <div className="container-left w-full md:w-7/12">
          <h2   className="text-themeOrange text-center sm:text-left text-3xl font-bold">
            Hello, I'm
          </h2>
          <h1   className="text-5xl font-bold py-6 text-center sm:text-left text-themBlack">
            Sujoy Ghosal
          </h1>
          <p   className="intro-text font-semibold text-xl opacity-75 text-center sm:text-left">
            A
            <span className="text-slate-500 profession"> Front-end Devoloper </span>
            From <span className="formIndia" > India</span> 
          </p>

          <p initial="hidden" animate="visible" className="py-6 text-gray-500 text-lg text-center sm:text-left" >
           {text.split(" ").map((currentElm,index)=> <span key={index} style={{marginRight:"5px",display:"inline-block"}}>{currentElm}</span>)}
          </p>

          <div className="link-social-media flex items-center justify-center gap-8 sm:justify-start">
            <a
              href="#about"
              className="about-me"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
             
            >
              About Me
            </a>
            <ul className="social-media flex items-center gap-4">
              <li>
                <a  href="https://www.facebook.com/sujoy.ghosal.522" target="_blank" className="text-xl" >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a  href="" target="_blank" className="text-xl" >
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a  href="https://www.linkedin.com/in/sujoy-ghosal-722282248/" target="_blank" className="text-xl" >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a  href="https://www.instagram.com/sujoy7h9s1l/" target="_blank" className="text-xl" >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
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

export default memo(Home);
