const ResourcesCards = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 cursor-pointer">
      <div className="px-4 py-4 rounded-xl bg-gradient-to-b from-[#F2FEED] to-[#EDFDE7] border hover:shadow hover:shadow-[#248000]/20 duration-300">
        <p className="bg-[#fff] text-[#262626] px-4 py-2 rounded-full text-base inline-flex">
          Sept 02, 2024
        </p>
        <h2 className="mt-6 text-2xl text-[#000] font-semibold leading-9">
          Unlocking the Power of Dashboards
        </h2>
        <button className="border border-[#248000] bg-[#DEFFD1] hover:bg-[#248000] hover:text-[#fff] duration-300 text-[#248000] px-4 py-2 rounded-full mt-6">
          Read more
        </button>
      </div>

      <div className="px-4 py-4 rounded-xl bg-gradient-to-b from-[#ECE7F5] to-[#F0ECF7] border hover:shadow hover:shadow-[#5500FF]/20 duration-300">
        <p className="bg-[#fff] text-[#262626] px-4 py-2 rounded-full text-base inline-flex">
          Sept 02, 2024
        </p>
        <h2 className="mt-6 text-2xl text-[#000] font-semibold leading-9">
          Building a Robust Business Intelligence Strategy
        </h2>
        <button className="border border-[#5500FF] bg-[#E0D1FF] hover:bg-[#5500FF] hover:text-[#fff] duration-300 text-[#5500FF] px-4 py-2 rounded-full mt-6">
          Read more
        </button>
      </div>

      <div className="px-4 py-4 rounded-xl bg-gradient-to-b from-[#FFF0FD] to-[#FFEDFD] border hover:shadow hover:shadow-[#B3009E]/20 duration-300">
        <p className="bg-[#fff] text-[#262626] px-4 py-2 rounded-full text-base inline-flex">
          Sept 02, 2024
        </p>
        <h2 className="mt-6 text-2xl text-[#000] font-semibold leading-9">
          ETL Best Practices: Transforming Data
        </h2>
        <button className="border border-[#B3009E] bg-[#FFF8F8] hover:bg-[#B3009E] text-[#B3009E] hover:text-[#fff] duration-300 px-4 py-2 rounded-full mt-6">
          Read more
        </button>
      </div>
    </div>
  );
};

export default ResourcesCards;
