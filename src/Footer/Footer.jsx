import React from "react";
import logo from "../assets/academy-logo.png";
import { IoIosMail } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full  bg-[#000000]">
      <div className="md:bg-[#FF4C00] md:w-[100%] md:flex md:justify-around md:gap-[20px] md:items-center md:h-[250px] ">
        <div className="md:w-[30%] md:flex md:flex-col  md:items-center md:justify-center md:">
          <img
            className="w-[300px] ml-[30px] text-center md:ml-0 md:w-[200px]"
            src={logo}
            alt="Academy logo"
          />
          <h1 className="text-[#FF0000] text-[23px] font-[900] text-center md:text-[13px] md:font-[800] md:text-black md:mb-[100px]">
            JOIN THE{" "}
            <span className="text-white  text-[23px] font-[900]  md:text-[13px] md:font-[800] "> ONES </span>{" "}
            COMMUNITY
          </h1>
        </div>
        <div className="pt-[30px] md:w-[30%]">
          <ul className="flex flex-col items-start justify-center gap-[2px] md:gap-0 p-[20px]">
            <li className="text-[20px] text-white font-[100] md:text-[20px] md:font-[600] md:text-black">
              <a>Home</a>
            </li>
            <li className="text-[20px] text-white font-[100] md:text-[20px] md:font-[600] md:text-black">
              <a>About Us</a>
            </li>
            <li className="text-[20px] text-white font-[100] md:text-[20px] md:font-[600] md:text-black">
              <a>Registration</a>
            </li>
            <li className="text-[20px] text-white font-[100] md:text-[20px] md:font-[600] md:text-black">
              <a>Our Founder</a>
            </li>
            <li className="text-[20px] text-white font-[100] md:text-[20px] md:font-[600] md:text-black">
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="p-[20px] md:w-[40%]">
          <h1 className="text-[#FF0000] text-[23px] font-[900] pb-[10px] md:text-black ">
            NEWS LETTER
          </h1>
          <input
            className="w-[65%] h-[45px] p-[5px] bg-[#e0989868] text-white  rounded-[3px] bg-opacity-5 md:w-[60%] md:bg-black md:p-[10px]"
            type="text"
            placeholder="Enter Your Email"
          />
          <span>
            <button className="bg-[#FF0000] hover:bg-[#ffff] hover:text-[#FF0000] text-xl font-semibold rounded-[1px] text-[#ffff] w-[100px] h-[42px] md:bg-white md:text-[#FF0000] md:h-[43px] md:font-black">
              SEND
            </button>
          </span>
        </div>
      </div>
      <div className="flex gap-[10px] p-[10px] md:items-center md:justify-center md:gap-[30px]">
        <IoIosMail className="text-[#ff000082] text-[30px] md:text-[19px]" />
        <GrInstagram className="text-[#ff000082] text-[25px] md:text-[15px]" />
        <FaXTwitter className="text-[#ff000082] text-[25px] md:text-[15px]" />
        <FaFacebook className="text-[#ff000082] text-[25px] md:text-[15px]" />
      </div>
      <p className="w-full h-[1px] bg-[#ff0000a2]"></p>
      <div> c</div>
    </div>
  );
}

export default Footer;
