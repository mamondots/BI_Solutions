/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import "./ResourcesCards.css";
import { Link } from "react-router-dom";
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

const ResourcesCards = () => {
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
    <div className="resourcesCards">
      <Slider {...settings}>
        <div className="px-2">
          <div className="px-4 py-4 rounded-xl bg-gradient-to-b from-[#F2FEED] to-[#EDFDE7] border hover:shadow hover:shadow-[#248000]/20 duration-300">
            <p className="bg-[#fff] text-[#262626] px-4 py-2 rounded-full text-base inline-flex">
              Sept 02, 2024
            </p>
            <h2 className="mt-6 text-2xl text-[#000] font-semibold leading-9">
              Unlocking the Power of Dashboards
            </h2>
            <Link to="/blog">
              <button className="border border-[#B3009E] bg-[#FFF8F8] hover:bg-[#B3009E] text-[#B3009E] hover:text-[#fff] duration-300 px-4 py-2 rounded-full mt-6">
                Read more
              </button>
            </Link>
          </div>
        </div>
        <div className="px-2">
          <div className="px-4 py-4 rounded-xl bg-gradient-to-b from-[#ECE7F5] to-[#F0ECF7] border hover:shadow hover:shadow-[#5500FF]/20 duration-300">
            <p className="bg-[#fff] text-[#262626] px-4 py-2 rounded-full text-base inline-flex">
              Sept 02, 2024
            </p>
            <h2 className="mt-6 text-2xl text-[#000] font-semibold leading-9">
              Building a Robust Business Intelligence Strategy
            </h2>
            <div>
              <Link to="/blog">
                <button className="border border-[#B3009E] bg-[#FFF8F8] hover:bg-[#B3009E] text-[#B3009E] hover:text-[#fff] duration-300 px-4 py-2 rounded-full mt-6">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="px-4 py-4 rounded-xl bg-gradient-to-b from-[#FFF0FD] to-[#FFEDFD] border hover:shadow hover:shadow-[#B3009E]/20 duration-300">
            <p className="bg-[#fff] text-[#262626] px-4 py-2 rounded-full text-base inline-flex">
              Sept 02, 2024
            </p>
            <h2 className="mt-6 text-2xl text-[#000] font-semibold leading-9">
              ETL Best Practices: Transforming Data
            </h2>
            <Link to="/blog">
              <button className="border border-[#B3009E] bg-[#FFF8F8] hover:bg-[#B3009E] text-[#B3009E] hover:text-[#fff] duration-300 px-4 py-2 rounded-full mt-6">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ResourcesCards;
