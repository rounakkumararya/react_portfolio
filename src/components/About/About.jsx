import { content } from "../../Content";
import "./About.css";

const About = () => {
  const { About } = content;

  return (
    <section className=" relative bg-zinc-900">
      <div className=" px-32  py-14">
        <h1
          className="title text-lime-500  lg:text-6xl text-start"
          data-aos="fade-down"
        >
          {About.title}
        </h1>
        <h4 className="subtitle" data-aos="fade-down">
          {About.subtitle}
        </h4>
        <br />

        <div className="flex items-center align-center justify-evenly">
          <img
            src={About.image}
            alt="about me image"
            data-aos="fade-right"
            className="max-w-xl "
          />

          <div
            data-aos="fade-left"
            className=" max-w-lg 
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[62rem]"
          >
            <h4 className="text-white">Rounak Kumar arya</h4>
            <br />
            <p className="text-white leading-7">{About.para[0]}</p>
            <br />
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

export default About;
