import { Link } from "react-router-dom";
import ResourcesCards from "../../Utilits/ResourcesCards";
import WithBI from "../../Utilits/withBI";

const Resources = () => {
  return (
    <div className="lg:px-28 md:px-20 px-6 py-12">
      <div className="flex items-center justify-center flex-col text-center">
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#262626]">
          Insights & Resources
        </h2>
        <p className="mt-5 lg:text-xl text-sm  text-[#333333]">
          Stay informed with the latest in data engineering, BI trends, and
          industry insights. Our resources are designed to help you stay ahead
          in a data-driven world.
        </p>

        <div className="mt-6">
          <button className="lg:text-lg md:text-lg text-sm font-medium px-8 py-2 bg-[#3D6BFF] hover:bg-[#0437DE] duration-300 cursor-pointer text-[#fff] rounded-lg shadow border-b-2 border-[#90AAFF]">
            Industry Trends
          </button>
        </div>
      </div>

      <div className="mt-12">
        <div className="relative bg-custom-image3 rounded-2xl bg-center pb-32">
          <div className="text-[#fff] px-8 py-8">
            <p className="border border-[#414141] bg-[#19202E] px-4 py-2 rounded-full text-sm inline-flex">
              Sept 02, 2024
            </p>
            <div className="lg:w-[580px] mt-4">
              <Link
                to="/blog"
                className=" lg:text-3xl text-lg font-semibold  lg:leading-10 hover:text-[#bdc7e7] cursor-pointer duration-300"
              >
                5 Ways to Optimize Your Data Pipeline for Better Insights
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ResourcesCards></ResourcesCards>
        </div>

        <div className="mt-32">
          <WithBI></WithBI>
        </div>
      </div>
    </div>
  );
};

export default Resources;
