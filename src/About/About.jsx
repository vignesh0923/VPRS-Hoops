import aboutimg from "../assets/3.jpg";
function About({ About }) {
  return (
    <div className=" w-full  bg-black ]" id="about" ref={About}>
      <h1
        data-aos="fade-down-right"
        data-aos-duration="600"
        data-aos-easing="linear"
        className="text-white pl-[10px] pt-[10px] text-[35px] font-[700] font-sans md:pb-[30px] lg:text-[40px] lg:pb-[35px] "
      >
        <span className="text-[#ff4c00]">A</span>bout
      </h1>
      <div className=" pl-5 pt-[10px] flex justify-around items-center gap-[30px]  lg:flex-row lg:justify-around">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="600"
          data-aos-easing="linear"
          className="w-[35%] h-[180px] md:w-[40%] md:h-[350px] lg:w-[25%] xl:h-[450px]"
        >
          <img
            className="w-full object-cover md:object-cover  h-full"
            src={aboutimg}
            alt="About img"
          />
        </div>
        <div className="w-[65%]  text-balance text-white font-[500]  ">
          <p className="text-[12px] font-bold text-justify pr-[10px] md:text-[22px] lg:text-[28px] xl:font-[300] xl:text-[34px]">
            VPRS Hoops Academy Foundation is a premier basketball training
            institution established with the vision of nurturing the next
            generation of basketball stars.
            <span className="text-[#ff4c00]"> Founded by Nagaarjun VPRS</span>,
            a passionate advocate for youth development and sports excellence,
            our academy is committed to providing high-quality coaching,
            state-of-the-art facilities, and a supportive environment for
            aspiring athletes.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
