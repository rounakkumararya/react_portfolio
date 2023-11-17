// import content

import { content } from "../../Content";

const Achievements = () => {
  const { Achievements } = content;

  return (
    <section className=" min-h-fit bg-zinc-900" id="skills">
      {/* content */}

      <div className=" px-32  py-14">
        <h1
          className="title text-lime-500  lg:text-6xl text-start"
          data-aos="fade-down"
        >
          {Achievements.title}
        </h1>
        <h4 className="subtitle" data-aos="fade-down">
          {Achievements.subtitle}
        </h4>

        <br />
        <div className="flex justify-center ">
          <img
            src={Achievements.image}
            alt="about me image"
            data-aos="fade-right"
            className="float-right"
          />
          <div className="flex flex-col w-full items-center justify-center">
            {Achievements.details.map((detail, i) => (
              <div
                data-aos="fade-up"
                data-aos-delay={i * 400}
                key={i}
                className="sm:cursor-pointer  
               relative  flex flex-col item-end mt-8
               gap-2 p-6 rounded-2xl  bg-lime-500 "
              >
                <p className="text-white">{detail.year}</p>
                <h4 className="text-white">{detail.degree}</h4>
                <p className="text-white">{detail.institute}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
