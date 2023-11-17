import { content } from "../../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className=" flex align-middle   bg-zinc-900">
      <div className="md:container  flex flex-col gap-16 text-center px-5 pt-14">
        <h1
          className="title  text-lime-500 lg:text-6xl text-center "
          data-aos="fade-down"
        >
          {Testimonials.title}
        </h1>

        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={10}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-100 h-[30rem] align-middle max-w-2xl "
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-lime-100 mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-lime-200 md:flex-row
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src={content.img} alt="..." className="h-24" />
                <div>
                  <p className="sm:text-base text-sm">{content.review}</p>
                  <br />
                  <h6>{content.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
