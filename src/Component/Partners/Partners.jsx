import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Partners.css";
import { Brands } from "../../../public/Brands";
import Slider from "react-slick";
const Partners = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="lg:px-32 md:px-20 px-6 lg:py-12 lg:mt-12 md:mt-12 mt-20 patnar">
      <div className="flex items-center justify-center flex-col text-center">
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#262626]">
          Our Trusted Partners
        </h2>
        <p className="mt-3 text-xl text-[#333333]">
          We proudly collaborate with industry-leading partners to bring you
          cutting-edge data solutions
        </p>
      </div>

      <div className="mt-20">
        <Slider {...settings}>
          {Brands.map((brand) => (
            <div key={brand.index} className="outline-none lg:px-0 px-4">
              <img
                className="lg:w-[90px] w-[60px] h-[60px] lg:h-[90px] object-cover"
                src={brand.image}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
