// import content
import { useEffect, useState } from "react";
import { content } from "../../Content";
import { createElement } from "react";

const Hero = () => {
  const { nav, hero } = content;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen flex lg:flex-row flex-col-reverse lg:items-center justify-center items-center">
        <div
          data-aos="slide-right"
          data-aos-delay="600"
          className="absolute h-full lg:w-6/12 w-3/12 top-0 left-0 bg-gradient-to-b from-stone-600  bottom-0 -z-10"
        >
          <h1 className="-rotate-90 absolute top-[50%] left-[-15%] text-red-900">
            {hero.firstName}{" "}
            <span className="text-[#EAF2FA] ">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div
          className="pb-16 pl-20 lg:px-2 flex flex-col items-center justify-center w-1/2 pt-5"
          data-aos="fade-down"
        >
          <h1>
            {hero.title[0]} <span className="text-red-900">&</span>
          </h1>
          <h2>{hero.title[1]}</h2>
          <br />
          <div className="flex gap-5  justify-start">
            <button className="btn">{hero.btnText[0]}</button>
            <button className="btn" onClick={() => setShowMenu(!showMenu)}>
              {hero.btnText[1]}
            </button>
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
        <div className="pl-20 lg:px-2 md:h-[100vh]  flex w-1/2 float-right items-end justify-start h-100">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="Profile"
            className="md:h-[90%] h-[15rem]  object-cover"
          />
        </div>
        <div
          className={`fixed  z-[999] flex flex-col items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-sm rounded-full text-stone-700 duration-300 ${
            showMenu ? "right-10" : "left-[-100%]"
          }`}
        >
          {nav.map((item, i) => (
            <a
              href={item.link}
              onClick={() => setActive(i)}
              className="text-xl p-2.5 rounded-full sm:cursor-pointer"
            >
              {createElement(item.icon)}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
