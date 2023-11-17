// import content

import { content } from "../../Content";

const Services = () => {
  const { Services } = content;

  return (
    <section className=" min-h-fit bg-zinc-900" id="skills">
      <div className=" px-32  py-14">
        <h1
          className="title text-lime-500  lg:text-6xl text-start"
          data-aos="fade-down"
        >
          {Services.title}
        </h1>
        <h4 className="subtitle" data-aos="fade-down">
          {Services.subtitle}
        </h4>

        <br />
        <div className="flex gap-4 justify-center">
          {Services.service_content.map((service, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={i * 400}
              key={i}
              className="card p-10 rounded-lg m-auto card-compact max-w-md bg-base-100 bg-lime-500 shadow-2xl"
            >
              <figure>
                {/* <img
                  className=" bg-white hover:scale-110 duration-200 "
                  src={service.logo}
                  alt={`${service.title}`}
                /> */}
              </figure>
              <div className=" bg-[url(service.logo)] card-body flex flex-col text-center  items-center">
                <h4 className=" text-white card-title">{service.title}</h4>
                <p className="text-white">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className=" text-white card-actions justify-end"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
