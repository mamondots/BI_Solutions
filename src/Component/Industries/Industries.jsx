import { IoIosArrowForward } from "react-icons/io";
import { IoRemoveOutline } from "react-icons/io5";

import finiacila from "../../assets/images/wallet-check.png";
import health from "../../assets/images/health.png";
import management from "../../assets/images/favorite-chart.png";
const Industries = () => {
  return (
    <div className="lg:px-28 md:px-20 px-6 lg:py-12 mt-12">
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

      <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <div className="border border-[#E3EAFF] hover:border-[#d0d9f5] duration-300 rounded-md p-2">
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

        <div className="border border-[#7274472d] hover:border-[#72744744] duration-300 rounded-md p-2">
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

        <div className="border border-[#E3EAFF] hover:border-[#d0d9f5] duration-300 rounded-md p-2">
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
    </div>
  );
};

export default Industries;