import { useState, useEffect } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import { debounce } from "../utils/helpers";

const Navbar = () => {
  const { nav } = content;
  const { logoImg } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  // scroll effect for nav

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    height: "60px",
    width: "100vw",
    textAlign: "center",
    transition: "top 0.7s",
  };

  return (
    <div
      style={{ ...navbarStyles, top: visible ? "0px" : "-125px" }}
      className=" z-[999] w-full flex justify-center"
    >
      <div
        className="active:scale-95 font-medium shadow-xl hover:scale-125 bg-lime-500  duration-200  absolute top-6 right-10 z-[999] rounded-2xl p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 color="white" size={34} />
      </div>
      <img
        className="absolute md:top-6 top-8 left-10 z-[999] md:w-60 w-40"
        src={logoImg.img}
        alt="logo"
      />
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-sm rounded-full text-stone-700 duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full active:scale-95 font-medium hover:scale-125  duration-200
     ${i === active && " bg-lime-500 text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
