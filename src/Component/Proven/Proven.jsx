/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Proven.css";

import icon from "../../assets/images/longIcon.png";
import { IoIosArrowForward } from "react-icons/io";

import { IoIosArrowBack } from "react-icons/io";
import Computer from "../../Utilits/ProvenComputer/Computer";

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

const Proven = () => {
  var settings = {
    dots: false,
    centerMode: true,
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
    <div className="bg-[#00071F] py-40 lg:px-0 px-6">
      <div className="flex items-center justify-center flex-col text-center lg:px-28 md:px-20 px-2">
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#fff]">
          Proven Results
        </h2>

        <p className="mt-5 lg:text-xl text-sm  text-[#c9c8c8]">
          Discover how our data engineering and BI solutions have empowered
          businesses to grow, innovate, and achieve their strategic goals
        </p>
      </div>

      <div className="text-[#fff] mx-4">
        <div className="flex flex-col items-center justify-center">
          <img className="mt-4" src={icon} alt="icon" />
        </div>
        <div className="hidden lg:block proven">
          <Slider {...settings} className="lg:h-[50vh]">
            <div className="px-4 lg:mt-10">
              <div className="border  border-dashed border-[#A6BBFF] h-[220px] rounded-md px-6 py-8 text-center bg-[#091025]">
                <p className="lg:text-base text-sm">
                  “Thanks to you, we transformed our data infrastructure
                  seamlessly. Their expertise in BI and data engineering enabled
                  us to gain clear, actionable insights, boosting our
                  decision-making and operational efficiency”
                </p>
                <p className="pt-4 text-sm text-[#8A8A8A]">
                  Jessica T., CFO, Global Asset Management
                </p>
              </div>
            </div>

            <div className="px-4 lg:mt-10">
              <div className="border  border-dashed border-[#A6BBFF] h-[220px] rounded-md px-6 py-8 text-center bg-[#091025]">
                <p className="lg:text-base text-sm">
                  “Thanks to you, we transformed our data infrastructure
                  seamlessly. Their expertise in BI and data engineering enabled
                  us to gain clear, actionable insights, boosting our
                  decision-making and operational efficiency”
                </p>
                <p className="pt-4 text-sm text-[#8A8A8A]">
                  Jessica T., CFO, Global Asset Management
                </p>
              </div>
            </div>

            <div className="px-4 lg:mt-10">
              <div className="border  border-dashed border-[#A6BBFF] h-[220px] rounded-md px-6 py-8 text-center bg-[#091025]">
                <p className="lg:text-base text-sm">
                  “Thanks to you, we transformed our data infrastructure
                  seamlessly. Their expertise in BI and data engineering enabled
                  us to gain clear, actionable insights, boosting our
                  decision-making and operational efficiency”
                </p>
                <p className="pt-4 text-sm text-[#8A8A8A]">
                  Jessica T., CFO, Global Asset Management
                </p>
              </div>
            </div>

            <div className="px-4 lg:mt-10">
              <div className="border  border-dashed border-[#A6BBFF] h-[220px] rounded-md px-6 py-8 text-center bg-[#091025]">
                <p className="lg:text-base text-sm">
                  “Thanks to you, we transformed our data infrastructure
                  seamlessly. Their expertise in BI and data engineering enabled
                  us to gain clear, actionable insights, boosting our
                  decision-making and operational efficiency”
                </p>
                <p className="pt-4 text-sm text-[#8A8A8A]">
                  Jessica T., CFO, Global Asset Management
                </p>
              </div>
            </div>
          </Slider>
        </div>
        <div className="lg:hidden">
          <Computer></Computer>
        </div>
      </div>
    </div>
  );
};

export default Proven;
