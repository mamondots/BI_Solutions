import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-scroll";

const Navbar = () => {
  // const items = [
  //   {
  //     title: "Home",
  //     href: "/",
  //   },
  //   {
  //     title: "About us",
  //     href: "/about",
  //   },
  //   {
  //     title: "Industries",
  //     href: "",
  //   },
  //   {
  //     title: "Resources",
  //     href: "",
  //   },
  //   {
  //     title: "Contact us",
  //     href: "",
  //   },
  // ];

  const [changeColor, setChangeColor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  useEffect(() => {
    setChangeColor(location.pathname !== "/");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 580 || location.pathname !== "/")
        setChangeColor(true);
      else setChangeColor(false);
    });
  }, [location.pathname]);
  return (
    <div
      className={`  fixed  top-0 w-full z-[999] ${
        changeColor
          ? "px-0"
          : "lg:py-8 md:py-8 sm:py-8 lg:px-28 md:px-28 sm:px-20"
      }`}
    >
      <nav
        className={`flex items-center justify-between lg:rounded md:rounded sm:rounded ${
          changeColor
            ? "lg:border-transparent border-b border-[#6d8df5b6] w-full flex  text-[black] lg:bg-[#fff] bg-[#fff] py-6 lg:px-52 px-4"
            : "lg:bg-[#fff]/20 md:bg-[#fff]/20 sm:bg-[#fff]/20 bg-[#000824] lg:py-2 py-6 px-4"
        } `}
      >
        <div>
          <Link to="banner" smooth={true} duration={1000}>
            <h2
              className={`text-xl font-medium capitalize cursor-pointer  ${
                changeColor ? "text-[#000]" : "text-[#fff]"
              }`}
            >
              logo
            </h2>
          </Link>
        </div>
        <div>
          <ui className="lg:flex hidden items-center gap-10 list-none cursor-pointer">
            <Link to="banner" smooth={true} duration={1000}>
              <li
                className={`hover:text-[#3861E8] duration-300  text-base ${
                  changeColor ? "text-[black]" : "text-[#fff]"
                }`}
              >
                <a href="">Home</a>
              </li>
            </Link>

            <Link to="about" smooth={true} duration={1000} offset={-90}>
              <li
                className={`hover:text-[#3861E8] duration-300  text-base ${
                  changeColor ? "text-[black]" : "text-[#fff]"
                }`}
              >
                <a href="">About us</a>
              </li>
            </Link>

            <Link to="industries" smooth={true} duration={1000} offset={-90}>
              <li
                className={`hover:text-[#3861E8] duration-300  text-base ${
                  changeColor ? "text-[black]" : "text-[#fff]"
                }`}
              >
                <a href="">Industries</a>
              </li>
            </Link>

            <Link to="resources" smooth={true} duration={1000} offset={-90}>
              <li
                className={`hover:text-[#3861E8] duration-300  text-base ${
                  changeColor ? "text-[black]" : "text-[#fff]"
                }`}
              >
                <a href="">Resources</a>
              </li>
            </Link>

            <Link to="contact" smooth={true} duration={1000} offset={-70}>
              <li
                className={`hover:text-[#3861E8] duration-300  text-base ${
                  changeColor ? "text-[black]" : "text-[#fff]"
                }`}
              >
                <a href="">Contact us</a>
              </li>
            </Link>
          </ui>
          <div className="lg:hidden block">
            <p
              onClick={handleOpen}
              className={`text-xl font-medium capitalize cursor-pointer  ${
                changeColor ? "text-[#000]" : "text-[#fff]"
              }`}
            >
              <AiOutlineMenu />
            </p>
          </div>
        </div>
      </nav>

      <div>
        {isOpen && (
          <div className="bg-[#E7E8F3] lg:hidden md:hidden absolute top-20 right-8  w-2/3 rounded">
            <ui className="flex flex-col  gap-4 px-8 py-8">
              <Link to="banner" smooth={true} duration={1000}>
                <li
                  onClick={handleOpen}
                  className="text-[#262626] flex items-center gap-2 list-none cursor-pointer hover:text-[#3861E8] duration-300"
                >
                  <span>
                    <HiOutlineArrowLongRight />
                  </span>
                  <span>Home</span>
                </li>
              </Link>

              <Link to="about" smooth={true} duration={1000} offset={-50}>
                <li
                  onClick={handleOpen}
                  className="text-[#262626] flex items-center gap-2 list-none cursor-pointer hover:text-[#3861E8] duration-300"
                >
                  <span>
                    <HiOutlineArrowLongRight />
                  </span>
                  <span>About us</span>
                </li>
              </Link>

              <Link to="industries" smooth={true} duration={1000} offset={-100}>
                <li
                  onClick={handleOpen}
                  className="text-[#262626] flex items-center gap-2 list-none cursor-pointer hover:text-[#3861E8] duration-300"
                >
                  <span>
                    <HiOutlineArrowLongRight />
                  </span>
                  <span>Industries</span>
                </li>
              </Link>

              <Link to="resources" smooth={true} duration={1000} offset={-90}>
                <li
                  onClick={handleOpen}
                  className="text-[#262626] flex items-center gap-2 list-none cursor-pointer hover:text-[#3861E8] duration-300"
                >
                  <span>
                    <HiOutlineArrowLongRight />
                  </span>
                  <span>Resources</span>
                </li>
              </Link>

              <Link to="contact" smooth={true} duration={1000} offset={-70}>
                <li
                  onClick={handleOpen}
                  className="text-[#262626] flex items-center gap-2 list-none cursor-pointer hover:text-[#3861E8] duration-300"
                >
                  <span>
                    <HiOutlineArrowLongRight />
                  </span>
                  <span>Contact us</span>
                </li>
              </Link>
            </ui>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
