import BannerImg from "../../assets/images/banner.png";
import resBannerImg from "../../assets/images/respBanner.png";

const Banner = () => {
  return (
    <div className="">
      <div className="w-full lg:px-12 md:px-12 px-8 py-8  lg:bg-custom-image bg-cover bg-no-repeat bg-center bg-[#010821] lg:h-[140vh] h-[100vh]  mt-[-140px] overflow-hidden">
        <div className="relative">
          <div>
            <img
              className="top-[100px] w-full bg-cover bg-no-repeat bg-center hidden lg:block absolute "
              src={BannerImg}
              alt="BannerImg"
            />
          </div>

          <div className="z-10 flex  items-center lg:items-start justify-center lg:text-start text-center flex-col absolute text-[#fff] lg:px-20 lg:py-60 md:py-40 py-20 lg:mt-28 mt-32">
            <h3 className="lg:text-xl text-base font-semibold">
              Transforming Data into
            </h3>
            <h2 className="lg:text-7xl md:text-7xl text-3xl font-bold lg:mt-4 md:mt-6 mt-12 lg:w-[600px]  w-full text-stroke-1 text-stroke-black">
              Strategic Intelligence
            </h2>
            <p className="lg:mt-4 md:mt-6 mt-12 lg:w-[500px] lg:text-xl text-base text-[#AEAEB3]">
              Empowering financial, healthcare, and asset management leaders
              with end-to-end BI and data engineering solutions that drive
              results.
            </p>

            <div className="lg:hidden block lg:mt-4 md:mt-6 mt-12">
              <img className="py-8" src={resBannerImg} alt={resBannerImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
