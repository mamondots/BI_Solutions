import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const items = [
    {
      title: "Home",
      href: "",
    },
    {
      title: "About us",
      href: "",
    },
    {
      title: "Industries",
      href: "",
    },
    {
      title: "Resources",
      href: "",
    },
    {
      title: "Contact us",
      href: "",
    },
  ];

  const [changeColor, setChangeColor] = useState(false);

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
            ? "border-transparent hidden lg:block  text-[black] lg:bg-[#fff] lg:py-10 px-28"
            : "lg:bg-[#fff]/20 md:bg-[#fff]/20 sm:bg-[#fff]/20 bg-[#000824] lg:py-2 py-6 px-4"
        } `}
      >
        <div>
          <h2
            className={`text-xl font-medium capitalize  ${
              changeColor ? "text-[#000]" : "text-[#fff]"
            }`}
          >
            logo
          </h2>
        </div>
        <div>
          <ui className="lg:flex hidden items-center gap-10 list-none cursor-pointer">
            {items.map((item) => (
              <li
                key={item.title}
                className={`hover:text-[#3861E8] duration-300  text-base ${
                  changeColor ? "text-[black]" : "text-[#fff]"
                }`}
              >
                {item.title}
                <a href=""></a>
              </li>
            ))}
          </ui>
          <div className="lg:hidden block">
            <p className="text-xl text-[#fff] cursor-pointer">
              <AiOutlineMenu />
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
