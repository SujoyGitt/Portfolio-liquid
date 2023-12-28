import React, { useEffect, useRef, useState } from "react";
import Six from "../assets/11.png"
import Seven from "../assets/12.png"
const Contact = ({textEnter,textLeave}) => {

  //see  what is say users start
  let [data,setdata] = useState({
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:""
  });
  let submitevent = ()=>{
    alert(`Your name is ${data.name}. Your email is ${data.email}. And you want to say me ${data.message} and you can reply within 24 hours.`);
    setTimeout(() => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    }, 3000);
  }
  let InputEvent = (event)=>{
    const{name,value} = event.target;
    setdata((previousData)=>{
      return{...previousData,[name]:value};
    })
  };
//see  what is say users end  

  return (
    <div id="contact" className="relative">
      <img src={Six} className="absolute md:top-0 -top-28 left-0 opacity-75 -z-10" alt="fancy" />
      <div className="contact-header w-full md:w-6/12 mx-auto text-center">
        <h3 className="text-2xl font-semibold text-themeOrange">Contact Me</h3>
        <h2 className="text-4xl my-5 font-semibold text-themeBlack">
          I Want To Hear From You
        </h2>
        <p className="text-lg  text-gray-400">
          Please fill out the form on this section to contact with me. Or call
          between <br /> 8:00 a.m. and 10:00 p.m. ET, Everyday
        </p>
      </div>
      <div className="contact-container flex items-center justify-center flex-wrap md:flex-nowrap">
        <div className="contact-left w-full md:w-6/12">
          <div className="address my-4 flex justify-center md:justify-normal items-center">
            <div href="" className="addicon flex justify-center items-center">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="data">
              <h3>Address</h3>
              <a href="">Kanchannagar,Burdwan II , 713102</a>
            </div>
          </div>
          <div className="email my-4 flex justify-center md:justify-normal items-center">
            <div href="" className="emailicon flex justify-center items-center">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="data">
              <h3>Email</h3>
              <a href="mailto:sujoy143656@gmail.com" onMouseEnter={textEnter} onMouseLeave={textLeave}>sujoy143656@gmail.com</a>
            </div>
          </div>
          <div className="phone my-4 flex justify-center md:justify-normal items-center">
            <div href="" className="phoneicon flex justify-center items-center">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div className="data">
              <h3>Phone</h3>
              <a href="tel:9064171925" onMouseEnter={textEnter} onMouseLeave={textLeave}>+91 9064171925</a>
            </div>
          </div>
        </div>
        <div className="contact-right w-full md:w-6/12 ">
          <form action="" className="flex w-full items-center gap-4 flex-wrap"  onSubmit={submitevent}>
            <div className="nameEmail flex w-full items-center gap-4 flex-wrap sm:flex-nowrap">
              <div className="inputbox w-full sm:w-6/12">
                <input type="text" className="w-full" placeholder="Your Name" id="name" name="name"  value={data.name}  onChange={InputEvent} required/>
              </div>
              <div className="inputbox w-full sm:w-6/12">
                <input
                  type="email"
                  id="email"
                  className="w-full"
                  placeholder="Your Email"
                  name="email"  value={data.email}  onChange={InputEvent} required
                />
              </div>
            </div>
           <div className="numberSubject flex w-full items-center gap-4 flex-wrap sm:flex-nowrap">
           <div className="inputbox w-full sm:w-6/12">
              <input
                type="number"
                className="w-full"
                placeholder="Your Phone"
                name="phone"  value={data.phone}  onChange={InputEvent}
                id="phone"
                required
              />
            </div>
            <div className="inputbox w-full sm:w-6/12">
              <input type="text" className="w-full" placeholder="Subject" name="subject"  value={data.subject}  onChange={InputEvent} id="subject" required/>
            </div>
           </div>
            <div className="inputbox w-full">
              <textarea
                type="text"
                id="message"
                className="w-full"
                placeholder="Write Your Message here"
                name="message"  value={data.message}  onChange={InputEvent} required
              ></textarea>
            </div>
            <button type="submit" className="py-4 btn px-6 cursor-pointer " onMouseEnter={textEnter}
        onMouseLeave={textLeave} >Submit Now</button>
          </form>
        </div>
      </div>
      <img src={Seven} className="absolute md:bottom-2/4 bottom-1/3 right-0 opacity-75 -z-10" alt="fancy" />
      <div className="map-container flex justify-center items-center">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7332.47489249306!2d87.81117499999999!3d23.234444999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f836f98c460e75%3A0x5fbc59597e7d5d9a!2sKhargeswar%20P%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1703686496521!5m2!1sen!2sin" className="w-full h-full"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Contact;
