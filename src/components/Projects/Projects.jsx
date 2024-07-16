import { content } from "../../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-zinc-900 min-h-fit " id="projects">
      <div className="  px-16  py-14  flex flex-col justify-between">
        <div>
          <h2
            className="title text-lime-500  lg:text-6xl text-start"
            data-aos="fade-down"
          >
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>

        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="rounded-3xl pb-16 max-w-7xl  self-start"
        >
          {Projects.project_content.map((content, i) => (
            <SwiperSlide key={i} className="  ">
              <article class="  bg-slate-200/70 mx-2 my-10 max-w-screen rounded-lg border border-white text-gray-700 shadow-md md:mx-auto">
                <div class="flex flex-col md:flex-row">
                  <div class="p-5 md:w-4/6 md:p-8">
                    <span class="rounded-md bg-orange-400 px-2 py-1 text-xs uppercase text-white">
                      {content.category}
                    </span>
                    <p class="mt-2 text-xl font-black md:mt-6 md:text-4xl">
                      {content.title}
                    </p>
                    <p class="mt-3 text-gray-600">{content.description}</p>

                    <button class="mt-4 mr-2 flex items-center justify-center rounded-md bg-lime-400 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-lime-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={content.link}
                      >
                        View Project
                      </a>
                    </button>
                  </div>
                  <div class="mx-auto w-[70%] items-center px-5 md:flex md:p-8">
                    <img
                      class="rounded-md shadow-xl w-full"
                      src={content.image}
                      alt="Shop image"
                    />
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
