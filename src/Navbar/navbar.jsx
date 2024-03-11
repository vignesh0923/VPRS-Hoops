import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import logo from "../assets/academy-logo.png";

function Navbar() {
  const [NavOpen, setNavOpen] = useState(false);

  return (
    <div>
      <div className="w-full h-[50px] bg-[#FF4C00] text-white flex items-center justify-between lg:p-4  relative z-[20]">
        <div className="w-[100px] p-[10px]">
          <img src={logo} alt="academy-logo" />
        </div>
        <nav className="hidden md:hidden lg:flex">
          <ul className="lg:flex lg:gap-[50px] xl:gap-7 lg:justify-center lg:items-start lg:p-4 ">
            <li>
              <a
                className="text-base text-black font-bold hover:underline-black hover:underline hover:underline-offset-[8px] "
                href=" "
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-base text-black font-bold hover:underline-black hover:underline hover:underline-offset-[8px] "
                href=" "
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-base text-black font-bold hover:underline-black hover:underline hover:underline-offset-[8px] "
                href=" "
              >
                Registrations
              </a>
            </li>
            <li>
              <a
                className="text-base text-black font-bold hover:underline-black hover:underline hover:underline-offset-[8px] "
                href=" "
              >
                Photo & Gallery
              </a>
            </li>
            <li>
              <a
                className="text-base text-black font-bold hover:underline-black hover:underline hover:underline-offset-[8px] "
                href=" "
              >
                Founder
              </a>
            </li>
            <li>
              <a
                className="text-base text-black font-bold hover:underline-black hover:underline hover:underline-offset-[8px] "
                href=" "
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <CgMenuRight
          className="font-bold ml-10 text-3xl lg:hidden text-black"
          onClick={() => setNavOpen(!NavOpen)}
        />
      </div>
      {/* ${navbar ? "ml-0":"ml-[70%]"} => this is using side navbar */}

      <div
        className={`fixed top-0 w-[200px] h-screen bg-black p-[10px] z-20 ${
          NavOpen ? "left-0" : "-left-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-start gap-[20px]">
          <li>
            <a
              className="text-xl md:text-xl text-[#FF4C00] font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px]"
              href=" "
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-xl md:text-xl text-[#FF4C00] font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px]"
              href=" "
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="text-xl md:text-xl text-[#FF4C00] font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px]"
              href=" "
            >
              Registrations
            </a>
          </li>
          <li>
            <a
              className="text-xl md:text-xl text-[#FF4C00] font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px]"
              href=" "
            >
              Photo & Gallery
            </a>
          </li>
          <li>
            <a
              className="text-xl md:text-xl text-[#FF4C00] font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px]"
              href=" "
            >
              Founder
            </a>
          </li>
          <li>
            <a
              className="text-xl md:text-xl text-[#FF4C00] font-bold hover:underline-yellow hover:underline hover:underline-offset-[8px]"
              href=" "
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div><img src={logo}/></div>
      </div>
    </div>
  );
}

export default Navbar;
