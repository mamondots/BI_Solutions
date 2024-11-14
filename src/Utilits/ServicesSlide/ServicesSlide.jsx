/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ServicesSlide.css";
import { Items } from "../../../public/ServiceItems";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow arrow-next lg:mr-0 mr-[-40px]" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow arrow-prev lg:mr-0 mr-[-40px]" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}
const ServicesSlide = () => {
  var settings = {
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative serviceSlide">
      <Slider {...settings}>
        {Items.map((item) => (
          <div key={item.title} className="mx-1">
            <div>
              <img src={item.image} alt="" />
            </div>

            <div className="py-12">
              <p className="lg:text-xl md:text-xl text-sm font-normal text-[#545454]">
                {item.subTitle}
              </p>
              <h2 className="mt-3 lg:text-3xl md:text-3xl text-xl font-semibold text-[#262626]">
                {item.title}
              </h2>
              <p className="mt-3 text-xl">{item.description}</p>

              <div className="mt-4">
                <button className="lg:text-lg md:text-lg text-sm font-medium px-8 py-2 bg-[#3D6BFF] hover:bg-[#BAC8FF] duration-300 cursor-pointer text-[#fff] hover:text-[#262626] rounded-lg shadow border-b-2 border-[#90AAFF]">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServicesSlide;
