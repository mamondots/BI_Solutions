/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Computer.css";

import { IoIosArrowForward } from "react-icons/io";

import { IoIosArrowBack } from "react-icons/io";

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

const Computer = () => {
  var settings = {
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings} className="provenComputer">
        <div className="px-4">
          <div className="border  border-dashed border-[#A6BBFF] rounded-md px-6 py-8 text-center bg-[#091025]">
            <p className="lg:text-base text-sm">
              “Thanks to you, we transformed our data infrastructure seamlessly.
              Their expertise in BI and data engineering enabled us to gain
              clear, actionable insights, boosting our decision-making and
              operational efficiency”
            </p>
            <p className="pt-4 text-sm text-[#8A8A8A]">
              Jessica T., CFO, Global Asset Management
            </p>
          </div>
        </div>

        <div className="px-4">
          <div className="border  border-dashed border-[#A6BBFF] rounded-md px-6 py-8 text-center bg-[#091025]">
            <p className="lg:text-base text-sm">
              “Thanks to you, we transformed our data infrastructure seamlessly.
              Their expertise in BI and data engineering enabled us to gain
              clear, actionable insights, boosting our decision-making and
              operational efficiency”
            </p>
            <p className="pt-4 text-sm text-[#8A8A8A]">
              Jessica T., CFO, Global Asset Management
            </p>
          </div>
        </div>

        <div className="px-4">
          <div className="border  border-dashed border-[#A6BBFF] rounded-md px-6 py-8 text-center bg-[#091025]">
            <p className="lg:text-base text-sm">
              “Thanks to you, we transformed our data infrastructure seamlessly.
              Their expertise in BI and data engineering enabled us to gain
              clear, actionable insights, boosting our decision-making and
              operational efficiency”
            </p>
            <p className="pt-4 text-sm text-[#8A8A8A]">
              Jessica T., CFO, Global Asset Management
            </p>
          </div>
        </div>

        <div className="px-4">
          <div className="border  border-dashed border-[#A6BBFF] rounded-md px-6 py-8 text-center bg-[#091025]">
            <p className="lg:text-base text-sm">
              “Thanks to you, we transformed our data infrastructure seamlessly.
              Their expertise in BI and data engineering enabled us to gain
              clear, actionable insights, boosting our decision-making and
              operational efficiency”
            </p>
            <p className="pt-4 text-sm text-[#8A8A8A]">
              Jessica T., CFO, Global Asset Management
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Computer;
