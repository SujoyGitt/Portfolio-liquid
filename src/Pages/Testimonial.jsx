import React from "react";
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
import Testimonialtopimg from "../assets/1.png";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";
import client5 from "../assets/client5.jpg";
import client6 from "../assets/client6.jpg";
import client7 from "../assets/client7.jpg";
const Testimonial = () => {
  return (
    <div className="pb-12 md:pb-4 min-h-screen w-full my-12 md:my-4 relative testimonial" id="testimonial">
      <img
        src={Testimonialtopimg}
        className="absolute right-0 -top-28 -z-10"
        alt="1"
      />
      <div className="testimonial-container w-full sm:w-10/12 md:w-8/12 lg:w-8/12 xl:w-6/12 m-auto">
        <h3 className="text-themeOrange text-xl font-bold  text-center ">
          Testimonials
        </h3>
        <h1 className="my-3  text-center  text-4xl font-semibold text-themeBlack">
          What My Clients Say
        </h1>
        <p className="text-gray-500 text-lg  text-center ">
          Most common methods for designing websites that work well on <br />{" "}
          desktop is responsive and adaptive design
        </p>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]} // Enable autoplay module
          autoplay={true}
          pagination={{ clickable: true }}
          direction="vertical"
          spaceBetween={0}
          slidesPerView={2}
        >
          <SwiperSlide>
            <a target="blank" href="https://www.freelancer.in/u/Sujoy321?review_context_id=2215717&review_type=contest&sb=t">
            <div className="review-container w-full flex items-center rounded-xl  px-2 sm:px-10  justify-center sm:justify-between bg-gray-200 py-14 border-2 border-gray-300 overflow-hidden ">
              <div className="review-avater">
                <img
                  src={client1}
                  alt=""
                  className="w-32 rounded-full "
                  srcset=""
                />
              </div>
              <div className="review-detail mx-6">
                <p className="text-black">
                  “Sujoy is amazing!! He has a very good skill of creativity and subject knowledge. Enjoyed working with him. Good luck Sujoy.”
                </p>
                <h3>ROBBINA</h3>
              </div>
            </div></a>
          </SwiperSlide>
          <SwiperSlide><a target="blank" href="https://www.freelancer.in/u/Sujoy321?review_context_id=2215717&review_type=contest&sb=t">
            <div className="review-container w-full flex items-center rounded-xl  px-2 sm:px-10  justify-center sm:justify-between bg-gray-200 py-14 border-2 border-gray-400 overflow-hidden ">
              <div className="review-avater">
                <img
                  src={client2}
                  alt=""
                  className="w-32 rounded-full "
                  srcset=""
                />
              </div>
              <div className="review-detail mx-6">
                <p>
                  “Sujoy is amazing!! He has a very good skill of creativity and subject knowledge. Enjoyed working with him. Good luck Sujoy.”
                </p>
                <h3>Tom Alex</h3>
              </div>
            </div></a>
          </SwiperSlide>
          <SwiperSlide>
           <a target="blank" href="https://www.freelancer.in/u/Sujoy321?review_context_id=2215717&review_type=contest&sb=t"> <div className="review-container w-full flex items-center rounded-xl  px-2 sm:px-10  justify-center sm:justify-between bg-gray-200 py-14 border-2 border-gray-400 overflow-hidden ">
              <div className="review-avater">
                <img
                  src={client3}
                  alt=""
                  className="w-32 rounded-full "
                  srcset=""
                />
              </div>
              <div className="review-detail mx-6">
                <p>
                  “Sujoy is amazing!! He has a very good skill of creativity and subject knowledge. Enjoyed working with him. Good luck Sujoy.”
                </p>
                <h3>ROBBINA</h3>
              </div>
            </div></a>
          </SwiperSlide>
          <SwiperSlide>
          <a target="blank" href="https://www.freelancer.in/u/Sujoy321?review_context_id=2215717&review_type=contest&sb=t"> <div className="review-container w-full flex items-center rounded-xl  px-2 sm:px-10  justify-center sm:justify-between bg-gray-200 py-14 border-2 border-gray-400 overflow-hidden ">
              <div className="review-avater">
                <img
                  src={client4}
                  alt=""
                  className="w-32 rounded-full "
                  srcset=""
                />
              </div>
              <div className="review-detail mx-6">
                <p>
                  “Sujoy is amazing!! He has a very good skill of creativity and subject knowledge. Enjoyed working with him. Good luck Sujoy.”
                </p>
                <h3>johny</h3>
              </div>
            </div></a> 
          </SwiperSlide>
          <SwiperSlide>
          <a target="blank" href="https://www.freelancer.in/u/Sujoy321?review_context_id=2215717&review_type=contest&sb=t">  <div className="review-container w-full flex items-center rounded-xl  px-2 sm:px-10  justify-center sm:justify-between bg-gray-200 py-14 border-2 border-gray-400 overflow-hidden ">
              <div className="review-avater">
                <img
                  src={client5}
                  alt=""
                  className="w-32 rounded-full "
                  srcset=""
                />
              </div>
              <div className="review-detail mx-6">
                <p>
                  “Sujoy is amazing!! He has a very good skill of creativity and subject knowledge. Enjoyed working with him. Good luck Sujoy.”
                </p>
                <h3>johny</h3>
              </div>
            </div></a> 
          </SwiperSlide>
          
        </Swiper>
      </div>
      <div className="one absolute top-28 left-28">
        <img
          src={client1}
          alt=""
          className="w-16 -z-10 opacity-80 rounded-full"
        />
      </div>
      <div className="one absolute bottom-80 left-4">
        <img
          src={client2}
          alt=""
          className="w-12 -z-10 opacity-80 rounded-full"
        />
      </div>
      <div className="one absolute top-64 left-52">
        <img
          src={client3}
          alt=""
          className="w-14 -z-10 opacity-80 rounded-full"
        />
      </div>
      <div className="one absolute bottom-44 left-64">
        <img
          src={client4}
          alt=""
          className="w-11 -z-10 opacity-80 rounded-full"
        />
      </div>
      <div className="one absolute top-28 right-24">
        <img
          src={client5}
          alt=""
          className="w-14 -z-10 opacity-80 rounded-full"
        />
      </div>
      <div className="one absolute top-64 right-8">
        <img
          src={client6}
          alt=""
          className="w-12 -z-10 opacity-80 rounded-full"
        />
      </div>
      <div className="one absolute bottom-60 right-60">
        <img
          src={client7}
          alt=""
          className="w-20 -z-10 opacity-80 rounded-full"
        />
      </div>
      <div className="circle absolute w-6 h-6 -z-10 bg-green-500 rounded-full top-52 left-16"></div>
      <div className="circle absolute w-8 h-8  -z-10 border-4 border-purple-600 rounded-full top-40 left-60"></div>
      <div className="circle absolute w-6 h-6  -z-10 bg-yellow-400 rounded-full bottom-72 left-40"></div>
      <div className="circle absolute w-16 h-16  -z-10 bg-yellow-500 rounded-full top-24 right-72"></div>
      <div className="circle absolute w-16 h-16  -z-10 border-green-500 border-8 rounded-full top-64 right-40"></div>
      <div className="circle absolute w-8 h-8  -z-10 bg-purple-600 rounded-full bottom-48 right-28"></div>

    </div>
  ); 
};

export default Testimonial;
