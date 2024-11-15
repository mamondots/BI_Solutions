/* eslint-disable react/no-unescaped-entities */
import FirstImg from "../../assets/images/contact01.png";
import FirstImg2 from "../../assets/images/contact02.png";
const Contact = () => {
  return (
    <div
      className="bg-[#fff] mt-[-40px] py-28 lg:px-28 md:px-20 px-6"
      id="contact"
    >
      <div className="flex items-center justify-center flex-col text-center">
        <h2 className="lg:text-4xl text-xl font-semibold text-[#262626]">
          Ready to Transform Your Data Strategy?
        </h2>
        <p className="mt-5 lg:text-xl text-sm  text-[#333333]">
          We're here to help you leverage data for strategic growth. Whether you
          need a consultation, support with an ongoing project, or insights into
          how Bl can empower your business, our team is ready to assist
        </p>
      </div>

      <div className="mt-16 relative">
        <form className="flex items-center justify-center ">
          <div className="lg:w-1/3 w-full flex items-center justify-center flex-col gap-6">
            <input
              className="border border-[#3861E8] shadow-custom-green px-4 py-2 rounded outline-none w-full"
              placeholder="Enter your mail"
              type="email"
              name=""
              id=""
            />
            <textarea
              className="border border-[#262626]/20 px-4 py-2 rounded outline-none w-full"
              placeholder="Enter your message"
              cols="20"
              rows="6"
            ></textarea>

            <input
              className="py-2 text-center bg-[#3D6BFF] text-[#fff] rounded w-full cursor-pointer hover:bg-[#0538DF] duration-300"
              type="submit"
              value="Send message"
            />
          </div>
        </form>

        <div>
          <div className="absolute hidden lg:block top-[-40px]">
            <img className="w-[180px]" src={FirstImg} alt="FirstImg" />
          </div>
          <div className="absolute hidden lg:block top-24 right-2">
            <img className="w-[180px]" src={FirstImg2} alt="FirstImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
