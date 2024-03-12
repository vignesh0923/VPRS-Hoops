import Founderimg from "../assets/1.jpg";
function Founder() {
  return (
    <div className="flex flex-col bg-black w-[100%]">
      <h1 data-aos="fade-down-right"data-aos-duration="600"
    data-aos-easing="linear" className="text-white font-[600] text-[30px] pl-[10px]  md:text-[35px] pt-[20px] lg:pl-[10px] lg:text-[45px] xl:pt-[30px]">
        <span className="text-[#ff4c00]">O</span>ur{" "}
        <span className="text-[#ff4c00]">F</span>ounder
      </h1>
      <div className="w-full pt-[30px] p-[10px] flex justify-around gap-[25px] items-center lg:flex-row lg:justify-around">
        <div className="w-[65%] text-balance text-white font-[500] lg:text-[35px]">
          <p className="text-[12px] font-bold text-justify pr-[10px] md:pl-[10px] md:text-[20px] md:text-justify xl:font-[300] xl:text-[35px]">
            Nagaarjun VPRS, the founder and driving force behind{" "}
            <span className="text-[#ff4c00]">
              {" "}
              VPRS Hoops Academy Foundation{" "}
            </span>
            , is a renowned figure in the sports community with a deep passion
            for basketball and a commitment to empowering young athletes. With
            years of experience in coaching and mentoring, Nagaarjun VPRS brings
            a wealth of knowledge and expertise to our academy, ensuring that
            each player receives personalized attention and guidance to thrive
            in their athletic journey.
          </p>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="600"
          data-aos-easing="linear"
          className="w-[35%] h-[170px] md:h-[310px] lg:w-[25%] lg:h-[300px] xl:h-[400px] "
        >
          <img
            src={Founderimg}
            alt="Founder img"
            className="w-full h-full object-cover lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
}
export default Founder;
