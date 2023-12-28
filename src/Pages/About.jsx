import React, { useEffect } from "react";
import process1 from "../assets/process.png";
import process2 from "../assets/process2.png";
import process3 from "../assets/process3.png";
import Reactlogo from "../assets/react.png";
import two from "../assets/2.png";
import three from "../assets/6.png";
import htmllogo from "../assets/html.png";
import csslogo from "../assets/css3.png";
import jslogo from "../assets/free-javascript-9294848-7577991.png";
import boostraplogo from "../assets/bootstrap.png";
import tailwindlogo from "../assets/tailwind.png";
import Resume from "../assets/Sujoy Ghosal.pdf";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const About = ({ textEnter, textLeave }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".process", {
      y: 200,
      duration: 2,
      stagger: 2,
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".process",
        start: "top 120%",
        end: "bottom 80%",
        scrub: 1,
      },
    });
    gsap.from(".skill-card", {
      x: -100,
      duration:2,
      stagger:2,
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".skill-card",
        
        scrub: 1,
      },
    });
    
  }, []);
  return (
    <div className="about " id="about">
      <div className="about-top w-full flex items-center py-16 md:py-0 justify-center">
        <div className="about-top-container flex items-center gap-4  flex-wrap md:flex-nowrap">
          <div className="process w-full sm:w-5/12  md:w-4/12">
            <div className="icon relative">
              <span className="absolute">
                <img src={process1} alt="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Capa_1"
                  enable-background="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  width="512"
                  class="svg absolute replaced-svg"
                >
                  <g>
                    <g fill="#ffbdbc">
                      <path d="m355.718 184.856c16 21.831 25.456 48.734 25.456 77.801 0 72.781-59.28 131.993-132.146 131.993s-132.146-59.212-132.146-131.993 59.28-131.993 132.146-131.993c29.416 0 56.617 9.65 78.598 25.947l38.065-38.021c-31.897-25.82-72.503-41.306-116.663-41.306-102.333 0-185.587 83.158-185.587 185.373s83.254 185.373 185.587 185.373 185.587-83.158 185.587-185.373c0-43.796-15.285-84.093-40.805-115.849z"></path>
                      <path d="m253.34 258.964c7.527-23.543 19.843-45.232 36.132-63.726-11.827-7.105-25.666-11.194-40.444-11.194-43.398 0-78.704 35.266-78.704 78.614 0 43.347 35.307 78.614 78.704 78.614s78.704-35.266 78.704-78.614c0-14.446-3.922-27.995-10.757-39.64-18.479 16.198-40.134 28.45-63.635 35.946z"></path>
                    </g>
                    <g>
                      <path
                        d="m509.067 97.566c2.717-2.714 3.64-6.745 2.374-10.371s-4.496-6.206-8.312-6.641l-40.436-4.595-26.15-26.12-4.6-40.379c-.435-3.813-3.013-7.042-6.636-8.308-3.625-1.27-7.651-.346-10.367 2.364l-39.563 39.518c-1.098 1.097-2.13 2.242-3.094 3.431-37.428-21.326-79.858-32.56-123.255-32.56-66.516 0-129.051 25.873-176.086 72.854-47.037 46.984-72.942 109.453-72.942 175.899s25.905 128.915 72.942 175.898c47.035 46.98 109.57 72.854 176.086 72.854s129.051-25.873 176.086-72.854c47.037-46.983 72.942-109.452 72.942-175.898 0-43.043-11.093-85.149-32.157-122.348 1.25-1.002 2.454-2.078 3.604-3.227zm-53.698 25.367c-5.112 5.107-12.162 7.577-19.354 6.752l-9.797-1.113 32.925-32.887 21.105 2.398zm-136.954 85.048c-13.718 13.702-29.822 24.988-47.351 33.273 8.293-17.499 19.589-33.578 33.302-47.274l124.092-123.949 14.034 14.017zm-73.836 45.602c-.02.02-.04.039-.06.059l-10.671 10.658c-3.907 3.903-3.911 10.235-.008 14.143 1.953 1.955 4.514 2.933 7.075 2.933 2.558 0 5.115-.975 7.067-2.925l10.671-10.659c.021-.021.041-.042.062-.063 27.698-9.239 53.183-24.97 73.835-45.597l21.589-21.564c11.172 18.766 17.035 40.045 17.035 62.091 0 67.268-54.794 121.993-122.146 121.993s-122.146-54.726-122.146-121.993 54.794-121.993 122.146-121.993c22.406 0 43.961 6.01 62.928 17.465l-21.725 21.7c-20.651 20.626-36.401 46.083-45.652 73.752zm169.838-221.275 2.4 21.081-32.945 32.907-1.116-9.801c-.815-7.169 1.646-14.208 6.756-19.312zm63.64 230.35c0 126.134-102.741 228.752-229.028 228.752s-229.029-102.618-229.029-228.752c0-126.135 102.741-228.753 229.028-228.753 40.386 0 79.854 10.571 114.561 30.63-1 4.602-1.254 9.397-.705 14.224v.001l2.915 25.589-39.327 39.282c-23.073-15.048-49.698-22.965-77.444-22.965-78.379 0-142.146 63.698-142.146 141.993s63.767 141.993 142.146 141.993 142.146-63.698 142.146-141.993c0-27.371-7.762-53.728-22.503-76.606l39.453-39.407 25.633 2.912v.001c1.674.189 3.341.283 5 .283 3.055 0 6.075-.319 9.017-.941 19.832 34.503 30.283 73.684 30.283 113.757z"
                        fill="#020288"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
            <div className="process-content ">
              <h3 className="text-2xl text-themeBlack font-semibold my-6">
                Pixel Perfect
              </h3>
              <p className="text-lg text-gray-600">
                Most common methods for designing websites that work well on
                desktop is responsive and adaptive design.
              </p>
            </div>
          </div>
          <div className="process w-full sm:w-6/12  md:w-4/12">
            <div className="icon relative">
              <span className="absolute">
                <img src={process2} alt="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Capa_1"
                  enable-background="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  class="svg replaced-svg"
                >
                  <g>
                    <g>
                      <path
                        d="m259.24 10v129.488c0 20.226 16.507 36.623 36.869 36.623 20.362 0 36.869-16.397 36.869-36.623v-25.265c0 20.226 16.507 36.623 36.869 36.623 20.362 0 36.869-16.397 36.869-36.623v-104.223z"
                        fill="#e2c4ff"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="m406.715 0h-301.43c-5.522 0-10 4.478-10 10v265.095c0 30.561 25.039 55.424 55.816 55.424h65.657v19.147c0 22.644-5.125 55.535-14.92 74.587-4.886 9.503-7.138 20.21-6.513 30.964 1.778 30.614 27.362 55.536 58.244 56.735.825.032 1.646.048 2.467.048 15.875 0 30.798-5.984 42.249-17 11.925-11.47 18.491-26.862 18.491-43.344 0-9.146-2.011-17.935-5.978-26.124-10.105-20.863-15.559-54.661-15.559-75.87v-19.144h65.657c30.777 0 55.816-24.863 55.816-55.424v-265.094c.003-5.522-4.475-10-9.997-10zm-291.43 20h31.408v38.517c0 5.522 4.478 10 10 10s10-4.478 10-10v-38.517h21.862v101.109c0 5.522 4.478 10 10 10s10-4.478 10-10v-101.109h188.159v222.786h-281.43v-222.786zm281.43 255.095c0 19.533-16.067 35.424-35.816 35.424h-75.657c-5.522 0-10 4.478-10 10v29.144c0 24.021 6.031 60.79 17.559 84.589 2.64 5.448 3.978 11.305 3.978 17.405 0 10.991-4.388 21.266-12.355 28.93-8.088 7.78-18.791 11.808-30.074 11.382-20.712-.805-37.867-17.457-39.055-37.911-.418-7.188 1.08-14.332 4.333-20.659 11.771-22.896 17.133-59.454 17.133-83.731v-29.147c0-5.522-4.478-10-10-10h-75.657c-19.749 0-35.816-15.891-35.816-35.424v-12.309h281.43v12.307z"
                        fill="#020288"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
            <div className="process-content ">
              <h3 className="text-2xl text-themeBlack font-semibold my-6">
                High Quality
              </h3>
              <p className="text-lg text-gray-600">
                Most common methods for designing websites that work well on
                desktop is responsive and adaptive design.
              </p>
            </div>
          </div>
          <div className="process w-full sm:w-6/12  md:w-4/12">
            <div className="icon relative">
              <span className="absolute">
                <img src={process3} alt="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  enable-background="new 0 0 512.001 512.001"
                  viewBox="0 0 512.001 512.001"
                  class="svg replaced-svg"
                >
                  <g>
                    <path
                      clip-rule="evenodd"
                      d="m311.033 333.001c0-20.491 2.941-26.562 32.531-65.373 54.987-70.488 2.787-177.518-87.533-176.626-90.312-.878-142.527 106.131-87.528 176.627 29.589 38.81 32.529 44.881 32.529 65.372z"
                      fill="#fff69b"
                      fill-rule="evenodd"
                    ></path>
                    <g fill="#020288">
                      <path d="m311.033 323.001h-110c-5.523 0-10 4.477-10 10v66c0 17.645 14.355 32 32 32h23v71c0 5.523 4.477 10 10 10s10-4.477 10-10v-71h23c17.645 0 32-14.355 32-32v-66c0-5.523-4.477-10-10-10zm-10 20v24h-90v-24zm-12 68h-66c-6.617 0-12-5.383-12-12v-12h90v12c0 6.617-5.384 12-12 12z"></path>
                      <path d="m256.033 151.001c-24.04 0-46.641 9.362-63.64 26.361-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0c26.055-27.156 72.94-27.155 98.994.001 1.953 1.952 4.512 2.928 7.071 2.928 8.68.154 13.409-10.92 7.071-17.071-16.997-16.999-39.598-26.361-63.638-26.361z"></path>
                      <path d="m284.317 222.716c8.692.152 13.402-10.922 7.071-17.071-18.611-19.395-52.1-19.396-70.711.001-9.031 9.679 4.452 23.18 14.143 14.142 5.666-5.666 13.199-8.787 21.213-8.787s15.547 3.121 21.213 8.787c1.952 1.952 4.512 2.928 7.071 2.928z"></path>
                      <path d="m246.029 241.001c0 5.526 4.482 10.005 10.008 10 13.25-.491 13.239-19.514-.008-20-5.523 0-10 4.477-10 10z"></path>
                      <path d="m256.033 56c5.523 0 10-4.477 10-10v-36c0-5.523-4.477-10-10-10s-10 4.477-10 10v36c0 5.523 4.477 10 10 10z"></path>
                      <path d="m356.533 26.929c-4.781-2.762-10.898-1.123-13.66 3.66l-18 31.178c-2.762 4.783-1.123 10.899 3.66 13.66 4.698 2.737 10.883 1.166 13.66-3.66 0 0 18-31.178 18-31.178 2.762-4.783 1.123-10.899-3.66-13.66z"></path>
                      <path d="m390.276 133.502c1.696 0 3.416-.433 4.991-1.342l31.177-18c11.229-7.003 1.698-23.548-10-17.32 0 0-31.177 18-31.177 18-8.844 5.172-5.086 18.657 5.009 18.662z"></path>
                      <path d="m447.034 191.001h-36c-13.241.486-13.256 19.509 0 20h36c13.24-.486 13.255-19.509 0-20z"></path>
                      <path d="m426.444 287.841-31.177-18c-4.783-2.763-10.898-1.123-13.66 3.66s-1.123 10.899 3.66 13.66l31.177 18c1.575.91 3.294 1.342 4.991 1.342 10.086-.006 13.861-13.483 5.009-18.662z"></path>
                      <path d="m169.192 30.589c-7.004-11.229-23.546-1.699-17.32 10 0 0 18 31.178 18 31.178 7.047 11.255 23.54 1.655 17.32-10 .001 0-18-31.178-18-31.178z"></path>
                      <path d="m126.798 114.84-31.177-18c-4.781-2.76-10.898-1.123-13.66 3.66s-1.123 10.899 3.66 13.66l31.177 18c1.575.91 3.294 1.342 4.991 1.342 10.086-.006 13.862-13.482 5.009-18.662z"></path>
                      <path d="m111.032 201.001c0-5.523-4.477-10-10-10h-36c-5.523 0-10 4.477-10 10s4.477 10 10 10h36c5.523 0 10-4.477 10-10z"></path>
                      <path d="m116.798 269.841-31.177 18c-11.257 7.043-1.646 23.545 10 17.32 0 0 31.177-18 31.177-18 11.229-7.003 1.699-23.547-10-17.32z"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
            <div className="process-content ">
              <h3 className="text-2xl text-themeBlack font-semibold my-6">
                Awesome Idea
              </h3>
              <p className="text-lg text-gray-600">
                Most common methods for designing websites that work well on
                desktop is responsive and adaptive design.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-middle w-full relative">
        <img
          src={two}
          alt="design"
          className="w-32 absolute -top-20  -z-10 left-0"
        />
        <div className="about-middle-container">
          <h3 className="text-3xl font-semibold ">Skills</h3>
          <h1 className="text-4xl text-slate-300 my-2 font-bold">
            MY TOP SKILLS
          </h1>
          <div className="skills-container w-full lg:w-9/12 m-auto flex items-center flex-wrap      first-line:sm:flex-nowrap">
            <div className="skill-card relative bg-white rounded-md py-5 border-2  flex items-center">
              <svg
                stroke="currentColor"
                className="absolute right-3 top-3"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
              <div className="skill-logo  mx-4">
                <img src={htmllogo} alt="" className="w-12" />
              </div>
              <div className="skill-data">
                <h4>Html</h4>
                <p>Hyper text markup language</p>
              </div>
            </div>
            <div className="skill-card relative bg-white rounded-md py-5 border-2  flex items-center">
              <svg
                stroke="currentColor"
                className="absolute right-3 top-3"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
              <div className="skill-logo  mx-4">
                <img src={csslogo} alt="" className="w-12" />
              </div>
              <div className="skill-data">
                <h4>Css3</h4>
                <p>Cascading Style Sheets</p>
              </div>
            </div>
            <div className="skill-card relative bg-white rounded-md py-5 border-2  flex items-center">
              <svg
                stroke="currentColor"
                className="absolute right-3 top-3"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
              <div className="skill-logo  mx-4">
                <img src={jslogo} alt="" className="w-12" />
              </div>
              <div className="skill-data">
                <h4>Javascript</h4>
                <p>Makes web pages interactive</p>
              </div>
            </div>
            <div className="skill-card relative bg-white rounded-md py-5 border-2 flex items-center">
              <svg
                stroke="currentColor"
                className="absolute right-3 top-3"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
              <div className="skill-logo  mx-4">
                <img src={Reactlogo} alt="" className="w-12" />
              </div>
              <div className="skill-data">
                <h4>React Js</h4>
                <p>Is a popular JavaScript library</p>
              </div>
            </div>
            <div className="skill-card relative bg-white rounded-md py-5 border-2 flex items-center">
              <svg
                stroke="currentColor"
                className="absolute right-3 top-3"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
              <div className="skill-logo  mx-4">
                <img src={boostraplogo} alt="" className="w-12" />
              </div>
              <div className="skill-data">
                <h4>Boostrap</h4>
                <p>A free front-end framework</p>
              </div>
            </div>
            <div className="skill-card relative bg-white rounded-md py-5 border-2  flex items-center">
              <svg
                stroke="currentColor"
                className="absolute right-3 top-3"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
              <div className="skill-logo  mx-4">
                <img src={tailwindlogo} alt="" className="w-12" />
              </div>
              <div className="skill-data">
                <h4>Tailwind Css</h4>
                <p>An open source CSS libery.</p>
              </div>
            </div>
          </div>
          <a
            href={Resume}
            target="blank"
            className="flex resume w-44 justify-center"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <span className="pr-3 inline-block text-base font-semibold">
              My Resume
            </span>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="null"
              class="svg replaced-svg inline-block"
            >
              <path
                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                fill="#ffff"
              ></path>
              <path
                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                fill="#ffff"
              ></path>
              <path
                d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                fill="#ffff"
              ></path>
              <path
                d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                fill="#ffff"
              ></path>
            </svg>
          </a>
        </div>
        <img src={three} alt="" className="absolute -bottom-28 right-0 -z-10" />
      </div>
    </div>
  );
};

export default About;
