import resBannerImg from "../../assets/images/respBanner.png";

const Banner = () => {
  return (
    <div className="" id="banner">
      {/* lg:h-[140vh] h-[100vh] */}
      <div className="w-full lg:px-12 md:px-12 px-8 lg:bg-[url(https://i.ibb.co.com/Y0jP58V/bannerBg.png)] min-h-screen bg-cover bg-no-repeat bg-center bg-[#010821]">
        <div className="relative lg:bg-[url(https://i.ibb.co.com/7S1n82y/banner.png)] lg:min-h-screen bg-cover bg-no-repeat bg-center">
          <div className="z-10 flex  items-center lg:items-start justify-center lg:text-start text-center flex-col lg:py-72 py-20 lg:px-16 px-6  text-[#fff] ">
            <h3 className="lg:text-xl text-base font-semibold">
              Transforming Data into
            </h3>
            <h2 className="lg:text-7xl md:text-7xl text-2xl font-bold lg:mt-4 md:mt-6 mt-8 lg:w-[600px] w-full text-stroke-1 text-stroke-black">
              Strategic Intelligence
            </h2>
            <p className="lg:mt-4 md:mt-6 mt-8 lg:w-[500px] lg:text-xl text-base text-[#AEAEB3]">
              Empowering financial, healthcare, and asset management leaders
              with end-to-end BI and data engineering solutions that drive
              results.
            </p>

            <div className="lg:hidden block lg:mt-0 md:mt-6 mt-8">
              <img className="py-8" src={resBannerImg} alt={resBannerImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
