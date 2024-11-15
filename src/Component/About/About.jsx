const About = () => {
  return (
    <div
      className="bg-[url(https://i.ibb.co.com/V9VyVHj/about.png)] bg-center lg:mt-12 md:mt-12 mt-28 flex flex-col items-center justify-center text-center text-[#fff] lg:py-52 py-40"
      id="about"
    >
      <p className="text-2xl mt-12">About us</p>
      <p className="lg:w-3/4 lg:px-8 px-2 lg:text-3xl md:text-xl text-base py-8 lg:leading-10 leading-8">
        We are a leading data engineering and BI consulting firm, helping
        sectors like finance, healthcare, and asset management harness data for
        growth and informed decisions through BI, ETL, cloud migration, and
        dashboard solutions.
      </p>
    </div>
  );
};

export default About;
