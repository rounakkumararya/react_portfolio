import { content } from "../../Content";

const Skills = () => {
  const { Skills } = content;

  return (
    <div className="bg-zinc-800 px-5  py-14">
      <h1
        className="title  text-lime-500 lg:text-6xl text-center"
        data-aos="fade-down"
      >
        {Skills.title}
      </h1>

      <br />
      <div className="flex flex-col  align-middle items-center justify-center pb-14  text-center">
        <h4 className="subtitle">Front-end</h4>
        <div className="flex max-w-[90%] flex-wrap gap-14 justify-center">
          {Skills.front_end.map((skill, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={i * 400}
              key={i}
              className="sm:cursor-pointer 
               relative group flex flex-col items-center mt-8
               gap-2 justify-between"
            >
              <img
                src={skill.logo}
                alt={`${skill.name}`}
                className="w-12 group-hover:scale-125 duration-200"
              />
              <p className="text-white text-xs ">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col align-middle items-center justify-center pb-14 text-center">
        <h4 className="subtitle">Back-end</h4>
        <div className="flex max-w-[90%] flex-wrap  gap-14 justify-center">
          {Skills.back_end.map((skill, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={i * 400}
              key={i}
              className="sm:cursor-pointer 
               relative group flex flex-col items-center mt-8
               gap-2 justify-between"
            >
              <img
                src={skill.logo}
                alt={`${skill.name}`}
                className="w-12 group-hover:scale-125 duration-200"
              />
              <p className="text-white text-xs ">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col align-middle items-center justify-center pb-14 text-center">
        <h4 className="subtitle">Others</h4>
        <div className="flex max-w-[90%] flex-wrap  gap-14 justify-center">
          {Skills.others.map((skill, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={i * 400}
              key={i}
              className="sm:cursor-pointer 
               relative group flex flex-col items-center mt-8
               gap-2 justify-between"
            >
              <img
                src={skill.logo}
                alt={`${skill.name}`}
                className="w-12 group-hover:scale-125 duration-200"
              />
              <p className="text-white text-xs ">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
