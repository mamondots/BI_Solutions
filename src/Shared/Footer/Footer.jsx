const Footer = () => {
  return (
    <div className="lg:px-28 md:px-20 px-6  py-12 lg:mt-10 relative">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-[#4D4D4D] text-2xl font-semibold">Logo</h2>
          <p className="mt-4 text-[#333333]">+123 563738 739</p>
          <p className="mt-2 text-[#333333]">companyname@gmail.com</p>
          <p className="mt-2 text-[#333333] lg:w-[360px]">
            123 Maplewood Lane, Springfield, IL 62701 United States
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg text-[#000]">Bi Solutions</h2>
            <ul className="flex flex-col gap-2 mt-4 text-[#BFBFBF]">
              <li className="hover:text-[#3D6BFF] duration-300">
                <a href="#">About Us</a>
              </li>
              <li className="hover:text-[#3D6BFF] duration-300">
                <a href="#">Features</a>
              </li>
              <li className="hover:text-[#3D6BFF] duration-300">
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg text-[#000]">Contact Us</h2>
            <ul className="flex flex-col gap-2 mt-4 text-[#BFBFBF]">
              <li className="hover:text-[#3D6BFF] duration-300">
                <a href="#">Twitter/ X</a>
              </li>
              <li className="hover:text-[#3D6BFF] duration-300">
                <a href="#">Instagram</a>
              </li>
              <li className="hover:text-[#3D6BFF] duration-300">
                <a href="#">Linkedin</a>
              </li>
              <li className="hover:text-[#3D6BFF] duration-300">
                <a href="#">Partner with us</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg text-[#000]">LEGAL</h2>
            <ul className="flex flex-col gap-2 mt-4 text-[#BFBFBF]">
              <li className="hover:text-[#3D6BFF] duration-300">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="hover:text-[#3D6BFF] duration-300">
                <a href="#">Terms of Agreement</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-12">
        <p className="text-sm text-[#8A8A8A]">© Copyright 2024</p>
      </div>

      {/* <div className="flex items-center justify-center absolute bottom-0 left-0">
        <h1 className="text-[#EAEAEA] text-[400px] font-bold ">LOGO</h1>
      </div> */}
    </div>
  );
};

export default Footer;
