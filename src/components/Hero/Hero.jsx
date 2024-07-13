// import content
import { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { content } from "../../Content";
import { createElement } from "react";

const Hero = () => {
  const { socials, hero } = content;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="">
      <div className=" min-h-screen flex lg:flex-row flex-col-reverse lg:items-center justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="150"
          className="absolute h-full lg:w-6/12 w-3/12 top-0 right-0  bottom-0 -z-10"
        >
          <img width="100%" height="200px" src={hero.background} alt="" />
          <h1 className="rotate-90 absolute top-[50%] right-[-26%] text-lime-500">
            {hero.firstName}{" "}
            <span className=" text-zinc-500">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div
          className="pb-16 pl-20  flex flex-col align-middle items-center justify-center w-1/2 pt-20"
          data-aos="fade-down"
        >
          <h1>
            {hero.title[0]} <span className="text-lime-500">&</span>
          </h1>
          <h2>{hero.title[1]}</h2>
          <br />
          <div className="flex gap-5  justify-start">
            <button className="btn">{hero.btnText[0]}</button>
          </div>

          <div className="flex flex-col w-1/2 gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="  md:h-[100vh] flex w-1/2 float-right items-end justify-start h-100">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="Profile"
            className="md:h-[90%] h-[15rem]  object-cover"
          />
        </div>
        <button
          className={` py-2 px-2 border-2 rounded-full 
     border-lime-500  active:scale-95 text-2xl shadow-xl hover:scale-125 duration-200 hover:rounded-tl-3xl hover:bg-lime-500 text-lime-500 hover:text-white fixed left-10 z-50  bottom-10  ${
       !showMenu ? "left-11 bottom-10" : "left-10 bottom-[-100%]"
     }`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <FaShareAlt />
        </button>
        <div
          className={`fixed  z-[999] flex flex-col items-center gap-3 duration-300 transition  ${
            showMenu ? "left-9 bottom-10" : "hidden "
          }`}
        >
          {socials.map((item, i) => (
            <a
              href={item.link}
              onClick={() => setActive(i)}
              target="_blank"
              className="text-3xl  bg-slate-200/60 px-3 py-3 backdrop-blur-md  text-stone-700 active:scale-95 hover:scale-150 duration-200  p-2 rounded-full "
            >
              {createElement(item.icon, { color: item.color })}
            </a>
          ))}
          <IoClose
            onClick={() => setShowMenu(false)}
            className="text-4xl  active:scale-95 hover:scale-150 transition duration-500 text-lime-500 "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
