/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
import { IoRemoveOutline } from "react-icons/io5";
import "./Industries.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import finiacila from "../../assets/images/wallet-check.png";
import health from "../../assets/images/health.png";
import management from "../../assets/images/favorite-chart.png";

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
const Industries = () => {
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
    <div
      className="lg:px-24 md:px-20 px-6 lg:py-12 lg:mt-12 mt-28 industries"
      id="industries"
    >
      <div className="flex items-center justify-center flex-col text-center">
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#262626]">
          Industries We Serve
        </h2>
        <p className="mt-5 lg:text-xl text-sm  text-[#333333]">
          We partner with leading companies in diverse sectors, bringing
          targeted data and BI solutions to complex challenges. Each industry we
          serve benefits from our experience, technical precision, and
          commitment to innovation
        </p>
      </div>

      <div className="mt-12">
        <Slider {...settings}>
          <div className="px-2">
            <div className=" duration-300 rounded-md p-2">
              <div className="bg-gradient-to-b from-[#E3EAFF]  to-[#fff] cursor-pointer rounded-md p-4">
                <div className="px-2 py-2 inline-flex rounded-md bg-gradient-to-b from-[#678BFE] to-[#3364FF] ">
                  <img src={finiacila} alt="finiacila" />
                </div>
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold text-[#000000]">
                    Financial Services
                  </h2>
                  <p className="mt-3 text-lg font-normal text-[#333333]">
                    Transform financial data into actionable insights to drive
                    profitability and manage risk more effectively
                  </p>
                  <button className="flex items-center gap-1 font-bold text-base text-[#3861E8] mt-3">
                    <span>Get started</span>
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </button>
                  <div className="flex items-center font-bold text-base text-[#3861E8] mt-12">
                    <p>$59,000</p>
                    <p className="text-4xl ml-8">
                      <IoRemoveOutline />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="border border-[#72744700] hover:border-[#72744744] duration-300 rounded-md p-2">
              <div className="bg-gradient-to-b from-[#FDFEE2]  to-[#fff] cursor-pointer rounded-md p-4">
                <div className="px-2 py-2 inline-flex rounded-md bg-gradient-to-b from-[#F9E17A] to-[#DEBB1B] ">
                  <img src={health} alt="Healthcare" />
                </div>
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold text-[#000000]">
                    Healthcare
                  </h2>
                  <p className="mt-3 text-lg font-normal text-[#333333]">
                    Enhance patient outcomes and streamline operations with data
                    solutions
                  </p>
                  <button className="flex items-center gap-1 font-bold text-base text-[#8A7E00] mt-3">
                    <span>Get started</span>
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </button>
                  <div className="flex items-center font-bold text-sm text-[#262626] mt-6">
                    <p>STEPS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="border border-[#e3eaff00] hover:border-[#d0d9f5] duration-300 rounded-md p-2">
              <div className="bg-gradient-to-b from-[#E3EAFF]  to-[#fff] cursor-pointer rounded-md p-4">
                <div className="px-2 py-2 inline-flex rounded-md bg-gradient-to-b from-[#678BFE] to-[#3364FF] ">
                  <img src={management} alt="management" />
                </div>
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold text-[#000000]">
                    Asset Management
                  </h2>
                  <p className="mt-3 text-lg font-normal text-[#333333]">
                    Empower asset management with real-time data visibility,
                    optimized workflows, and deep analytical insights
                  </p>
                  <button className="flex items-center gap-1 font-bold text-base text-[#3861E8] mt-3">
                    <span>Get started</span>
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="px-2">
            <div className="border border-[#72744700] hover:border-[#72744744] duration-300 rounded-md p-2">
              <div className="bg-gradient-to-b from-[#FDFEE2]  to-[#fff] cursor-pointer rounded-md p-4">
                <div className="px-2 py-2 inline-flex rounded-md bg-gradient-to-b from-[#F9E17A] to-[#DEBB1B] ">
                  <img src={health} alt="Healthcare" />
                </div>
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold text-[#000000]">
                    Healthcare
                  </h2>
                  <p className="mt-3 text-lg font-normal text-[#333333]">
                    Enhance patient outcomes and streamline operations with data
                    solutions
                  </p>
                  <button className="flex items-center gap-1 font-bold text-base text-[#8A7E00] mt-3">
                    <span>Get started</span>
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </button>
                  <div className="flex items-center font-bold text-sm text-[#262626] mt-6">
                    <p>STEPS</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Industries;
