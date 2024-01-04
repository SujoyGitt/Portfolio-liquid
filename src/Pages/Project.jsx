import React, { memo } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import Eccomerse from "../assets/Screenshot_8.webp";
import Travel from "../assets/Screenshot_4.webp";
import Youtube from "../assets/Screenshot_5.webp";
import School from "../assets/Screenshot_6.webp";
import Facebook from "../assets/Screenshot_7.webp";
import Cyberfiction from "../assets/Screenshot_2.webp";
import Fooddesk from "../assets/Screenshot_3.webp";
import Five from "../assets/5.webp";
const Project = ({textEnter,textLeave}) => {
  return (
    <div id="project" className="w-full relative">
      <div className="service w-full">
        <div className="service-container">
          <div className="service-header mb-20 mt-12">
            <h2 className="text-4xl font-bold">Services</h2>
            <h3 className="text-4xl py-2 font-bold">
              I Provide{" "}
              <span className="w-20 h-0.5 inline-block bg-themeBlack"></span>
            </h3>
          </div>
          <div className="subject-container subject-one  flex items-center flex-col md:flex-row border-t border-b py-7 border-themeBlack" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="subject flex items-center ">
              <div className="count px-2 md:px-8 text-3xl text-violet-500">
                01
              </div>
              <div className="subject-text text-2xl text-themeBlack font-semibold ">
                UI/UX Devolopement
              </div>
            </div>
            <div className="subject-details md:px-24 text-lg opacity-80 my-4 md:my-0">
              A specialized software developer who focuses on creating user
              interfaces experiences for products like websites and mobile apps.
            </div>
            <div className="pr-8 arrow none">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="null"
                class="svg replaced-svg"
              >
                <path
                  d="M20.843 4.21239C20.843 3.79817 20.5072 3.46238 20.093 3.46238L13.343 3.46234C12.9288 3.46233 12.593 3.79812 12.593 4.21233C12.593 4.62655 12.9288 4.96233 13.343 4.96234L19.343 4.96238L19.3429 10.9624C19.3429 11.3766 19.6787 11.7124 20.0929 11.7124C20.5072 11.7124 20.8429 11.3766 20.8429 10.9624L20.843 4.21239ZM4.43731 20.9285L20.6233 4.74271L19.5627 3.68205L3.37665 19.8678L4.43731 20.9285Z"
                  fill="#12141D"
                ></path>
              </svg>
            </div>
          </div>
          <div className="subject-container subject-two  flex items-center flex-col md:flex-row  border-b py-7 border-themeBlack" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="subject flex items-center ">
              <div className="count px-2 md:px-8 text-3xl text-violet-500">
                02
              </div>
              <div className="subject-text text-2xl text-themeBlack font-semibold ">
              Front-End Developement              </div>
            </div>
            <div className="subject-details md:px-24 text-lg opacity-80 my-4 md:my-0">
              A specialized software developer who focuses on creating user
              interfaces experiences for products like websites and mobile apps.
            </div>
            <div className="pr-8 arrow none">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="null"
                class="svg replaced-svg"
              >
                <path
                  d="M20.843 4.21239C20.843 3.79817 20.5072 3.46238 20.093 3.46238L13.343 3.46234C12.9288 3.46233 12.593 3.79812 12.593 4.21233C12.593 4.62655 12.9288 4.96233 13.343 4.96234L19.343 4.96238L19.3429 10.9624C19.3429 11.3766 19.6787 11.7124 20.0929 11.7124C20.5072 11.7124 20.8429 11.3766 20.8429 10.9624L20.843 4.21239ZM4.43731 20.9285L20.6233 4.74271L19.5627 3.68205L3.37665 19.8678L4.43731 20.9285Z"
                  fill="#12141D"
                ></path>
              </svg>
            </div>
          </div>
          <div className="subject-container subject-three  flex items-center flex-col md:flex-row  border-b py-7 border-themeBlack" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="subject flex items-center ">
              <div className="count px-2 md:px-8 text-3xl text-violet-500">
                03
              </div>
              <div className="subject-text text-2xl text-themeBlack font-semibold ">
              PSD to HTML/React
              </div>
            </div>
            <div className="subject-details md:px-24 text-lg opacity-80 my-4 md:my-0">
              A specialized software developer who focuses on creating user
              interfaces experiences for products like websites and mobile apps.
            </div>
            <div className="pr-8 arrow none">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="null"
                class="svg replaced-svg"
              >
                <path
                  d="M20.843 4.21239C20.843 3.79817 20.5072 3.46238 20.093 3.46238L13.343 3.46234C12.9288 3.46233 12.593 3.79812 12.593 4.21233C12.593 4.62655 12.9288 4.96233 13.343 4.96234L19.343 4.96238L19.3429 10.9624C19.3429 11.3766 19.6787 11.7124 20.0929 11.7124C20.5072 11.7124 20.8429 11.3766 20.8429 10.9624L20.843 4.21239ZM4.43731 20.9285L20.6233 4.74271L19.5627 3.68205L3.37665 19.8678L4.43731 20.9285Z"
                  fill="#12141D"
                ></path>
              </svg>
            </div>
          </div>
          <div className="subject-container subject-four  flex items-center flex-col md:flex-row  border-b py-7 border-themeBlack" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="subject flex items-center ">
              <div className="count px-2 md:px-8 text-3xl text-violet-500">
                04
              </div>
              <div className="subject-text text-2xl text-themeBlack font-semibold ">
              React Developement
              </div>
            </div>
            <div className="subject-details md:px-24 text-lg opacity-80 my-4 md:my-0">
              A specialized software developer who focuses on creating user
              interfaces experiences for products like websites and mobile apps.
            </div>
            <div className="pr-8 arrow">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="null"
                class="svg replaced-svg"
              >
                <path
                  d="M20.843 4.21239C20.843 3.79817 20.5072 3.46238 20.093 3.46238L13.343 3.46234C12.9288 3.46233 12.593 3.79812 12.593 4.21233C12.593 4.62655 12.9288 4.96233 13.343 4.96234L19.343 4.96238L19.3429 10.9624C19.3429 11.3766 19.6787 11.7124 20.0929 11.7124C20.5072 11.7124 20.8429 11.3766 20.8429 10.9624L20.843 4.21239ZM4.43731 20.9285L20.6233 4.74271L19.5627 3.68205L3.37665 19.8678L4.43731 20.9285Z"
                  fill="#12141D"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <img src={Five} alt="" className="absolute top-2/4 -z-10 left-0"/>
      <div className="project-container  py-32">
        <div className="project-container-header mb-20 mt-12">
          <h2 className="text-4xl font-bold">Look at my</h2>
          <h3 className="text-4xl py-2 font-bold">
            Recent Projects
            <span className="w-20 h-0.5 inline-block bg-themeBlack"></span>
          </h3>
        </div>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]} // Enable autoplay module
          autoplay={true}
          // navigation
          pagination={true}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
           
            768: {
              slidesPerView: 2,
            },
           
          }}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <SwiperSlide className="" >
            <a target="blank" href="https://fashionstorein.netlify.app/">
              <div className="project-card">
                <img src={Eccomerse} alt="" />
                <h3 className="pt-4 pb-2 text-lg">Self Practice</h3>
                <h2 className="text-2xl border-b inline-block border-themeBlack font-semibold">Eccommerce</h2>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="" >
            <a target="blank" href="https://sujoygitt.github.io/CYBERFICTION/">
              <div className="project-card">
                <img src={Cyberfiction} alt="" />
                <h3 className="pt-4 pb-2 text-lg">Self Practice</h3>
                <h2 className="text-2xl border-b inline-block border-themeBlack font-semibold">Cyberfiction Clone</h2>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="" >
            <a target="blank" href="https://sujoygitt.github.io/Food-desk/">
              <div className="project-card">
                <img src={Fooddesk} alt="" />
                <h3 className="pt-4 pb-2 text-lg">Self Practice</h3>
                <h2 className="text-2xl border-b inline-block border-themeBlack font-semibold">Food-delivery</h2>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="" >
            <a target="blank" href="https://sujoygitt.github.io/BookingApp/">
              <div className="project-card">
                <img src={Travel} alt="" />
                <h3 className="pt-4 pb-2 text-lg">Freelance</h3>
                <h2 className="text-2xl border-b inline-block border-themeBlack font-semibold">Booking Website</h2>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="" >
            <a target="blank" href="https://sujoygitt.github.io/FacebookClone/">
              <div className="project-card">
                <img src={Facebook} alt="" />
                <h3 className="pt-4 pb-2 text-lg">Self Practice</h3>
                <h2 className="text-2xl border-b inline-block border-themeBlack font-semibold">Facebook Clone</h2>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="" >
            <a target="blank" href="https://sujoygitt.github.io/auth">
              <div className="project-card">
                <img src={Youtube} alt="" />
                <h3 className="pt-4 pb-2 text-lg">Self Practice</h3>
                <h2 className="text-2xl border-b inline-block border-themeBlack font-semibold">Youtube Clone</h2>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="" >
            <a target="blank" href="https://sujoygitt.github.io/LIGHTMODELCOLLEGE/">
              <div className="project-card">
                <img src={School} alt="" />
                <h3 className="pt-4 pb-2 text-lg">Freelance</h3>
                <h2 className="text-2xl border-b inline-block border-themeBlack font-semibold">School Website</h2>
              </div>
            </a>
          </SwiperSlide>
         
        </Swiper>
      </div>

    </div>
  );
};

export default memo(Project);
