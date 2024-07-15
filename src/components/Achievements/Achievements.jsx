// import content

import { content } from "../../Content";

const Achievements = () => {
  const { Achievements } = content;

  return (
    <section className=" min-h-fit bg-zinc-900" id="skills">
      {/* content */}

      <div className="flex flex-col px-20 py-14 lg:px-16 text-center ">
        <h1
          className="title text-lime-500  lg:text-6xl lg:text-start"
          data-aos="fade-down"
        >
          {Achievements.title}
        </h1>
        <h4 className="subtitle lg:text-start" data-aos="fade-down">
          {Achievements.subtitle}
        </h4>

        <br />
        <div className="flex flex-col lg:flex-row justify-around align-middle items-center">
          <img
            src={Achievements.image}
            alt="about me image"
            data-aos="fade-right"
            className="float-right"
          />
          <div className="flex flex-col  items-center justify-center mb-10">
            {Achievements.details.map((detail, i) => (
              <div
                data-aos="fade-up"
                data-aos-delay={i * 400}
                key={i}
                className="sm:cursor-pointer  
               relative  flex flex-col item-end mt-8
               gap-2 p-6  rounded-2xl  bg-lime-500 "
              >
                <p className="text-white">{detail.year}</p>
                <h4 className="text-white">{detail.degree}</h4>
                <p className="text-white">{detail.institute}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="line-styling">
        <div className="style-line bg-lime-500"></div>
        <div className="style-circle bg-lime-500"></div>
        <div className="style-circle bg-lime-500"></div>
      </div>
    </section>
  );
};

export default Achievements;
