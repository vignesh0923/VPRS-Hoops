import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
// import { FaQuoteLeft } from "react-icons/fa6";
import vision from "../assets/vision.jpg";
import mission from "../assets/mision.jpg";

function VisionMission() {
  return (
    <div className="  pt-[50px] pl-[10px] bg-black flex flex-col gap-[50px]">
      <h1 data-aos="fade-down-right"data-aos-duration="600"
    data-aos-easing="linear" className="font-[600] text-[30px] text-white lg:text-[40px] ">
        VISION <span className="font-[600] text-[30px] text-[#FF4C00]"> &</span>{" "}
        MISSION
      </h1>

      {/* ------------------------ vision ----------------------- */}

      <div className=" w-full flex justify-around ">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="600"
          data-aos-easing="linear"
          className=" h-[150px] w-[30%] md:w-[40%] md:h-[250px]"
        >
          <img
            className="h-full w-[100%] object-cover"
            src={vision}
            alt="vision and mission img-1"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-[50%] ">
          <h1 className="text-[#FF4C00] font-extrabold w-full flex gap-[5px] md:text-[22px] xl:text-[35px]">
            Vision
            <span>
              <FaQuoteRight className="text-yellow-500" />
            </span>
          </h1>
          <p className="text-white text-[10px] md:text-[20px] md:text-justify xl:text-[28px]">
            To be recognized as a leading institution in basketball development,
            shaping the future of the sport by nurturing talent, instilling
            values, and promoting excellence.
          </p>
        </div>
      </div>

      {/* ------------------------ mission ---------------------- */}

      <div className=" w-full flex justify-around ">
        <div className="flex flex-col justify-start w-[50%] ">
          <h1  className="text-[#FF4C00] font-extrabold w-full flex gap-[5px]  md:text-[22px] xl:text-[35px]">
            Mission
            <span>
              <FaQuoteRight className="text-yellow-500" />
            </span>{" "}
          </h1>
          <p className="text-white text-[10px] md:text-[20px] md:text-justify xl:text-[28px]">
            Our mission is to provide comprehensive basketball training programs
            that focus on skill development, physical conditioning, and
            character building. We aim to create a supportive and inclusive
            environment where athletes can grow both athletically and
            personally, setting them up for success on and off the court.
          </p>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="600"
          data-aos-easing="linear"
          className=" h-[150px] w-[30%] md:w-[40%] md:h-[250px]"
        >
          <img
            className="h-full w-[100%] object-cover"
            src={mission}
            alt="vision and mission img-1"
          />
        </div>
      </div>
    </div>
  );
}

export default VisionMission;
