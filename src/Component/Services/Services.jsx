import { Items } from "../../../public/ServiceItems";
import ServicesSlide from "../../Utilits/ServicesSlide/ServicesSlide";

const Services = () => {
  return (
    <div className="lg:px-32 md:px-20 px-6 py-12 lg:mt-40 relative">
      <div className="lg:flex hidden flex-col justify-center items-center gap-4">
        {Items.map((item, itemIndex) => (
          <div
            key={item.title}
            className="flex lg:flex-row  flex-col items-center justify-center gap-2 sticky "
            style={{
              top: `calc(80px + ${itemIndex * 0}px)`,
            }}
          >
            <div className="flex lg:gap-12 lg:w-3/5">
              <div className="flex flex-col  gap-2 mt-12 px-2 bg-[#fff] rounded-xl">
                {item.arrows.map((arrow) => (
                  <img
                    className=""
                    key={arrow.arrow}
                    src={arrow.arrow}
                    alt=""
                  />
                ))}
              </div>
              <img className="lg:w-[400px]" src={item.image} alt="" />
            </div>

            <div className="lg:w-3/5 bg-[#fff] py-12">
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
      </div>

      <div className="lg:hidden mt-8">
        <ServicesSlide></ServicesSlide>
      </div>
    </div>
  );
};

export default Services;
