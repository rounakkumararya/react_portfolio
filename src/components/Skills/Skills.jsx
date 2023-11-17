// import content

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
      <h4 className="subtitle text-center" data-aos="fade-down">
        {Skills.subtitle}
      </h4>

      <br />
      <div className="flex gap-4 justify-center">
        {Skills.skills_content.map((skill, i) => (
          <div
            data-aos="fade-up"
            data-aos-delay={i * 400}
            key={i}
            className="sm:cursor-pointer 
               relative group flex  items-center mt-8
               gap-10 p-6 rounded-full bg-lime-500 "
          >
            <p className="text-white">{skill.name}</p>
            <img
              src={skill.logo}
              alt={`${skill.name}`}
              className="w-10 group-hover:scale-125 duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
