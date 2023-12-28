import React from 'react'

const Footer = () => {
  return (
    <div className='footer w-full bg-slate-100'>
      <div className="footer-container text-gray-500 w-11/12 md:w-4/5 m-auto flex items-center py-16 flex-wrap justify-between">
        <div className="footer-left ">
        Developed with love by <span className='font-bold'>Sujoy Ghosal</span> © 2023
        </div>
        <div className="footer-right flex items-center">
        <div className="">Terms & Condition</div>
        <div className="ml-8">Privacy Policy</div>
        </div>
      </div>
    </div>
  )
}

export default Footer;