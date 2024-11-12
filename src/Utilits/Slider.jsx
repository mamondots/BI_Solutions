/* eslint-disable react/prop-types */

const Slider = ({ image, title, description }) => {
  return (
    <div className="inline-flex lg:flex-row  flex-col items-center justify-center  gap-8">
      <div className="inline-flex gap-8 lg:w-2/3 md:w-2/3 w-full">
        <div className="">
          <img className="" src={image} alt="SliderImage" />
        </div>
      </div>
      <div className="lg:w-4/5 md:w-4/5 w-full">
        <p className="lg:text-xl md:text-xl text-sm font-normal text-[#545454]">
          Our services
        </p>
        <h2 className="mt-3 lg:text-3xl md:text-3xl text-xl font-semibold text-[#262626]">
          {title}
        </h2>
        <p className="mt-3 text-2xl">{description}</p>
        <div className="mt-4">
          <button className="lg:text-lg md:text-lg text-sm font-medium px-8 py-2 bg-[#3D6BFF] hover:bg-[#BAC8FF] duration-300 cursor-pointer text-[#fff] hover:text-[#262626] rounded-lg shadow border-b-2 border-[#90AAFF]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
