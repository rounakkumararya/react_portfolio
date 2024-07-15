// import content
import { createElement, useState } from "react";
import { content } from "../../Content";
// import modal package
// import Modal from "react-modal";

// Modal.setAppElement("#root");

const Education = () => {
  const { skills, Education } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className=" min-h-fit bg-zinc-900 pt-10" id="skills">
      {/* modal */}
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit, ame.</li>
          <li>Lorem ipsum dolor sit, amet consectetur</li>
          <li>
            Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
            beatae quos rem.
          </li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal> */}

      {/* content */}

      <div className=" lg:px-16  py-14  text-center lg:text-start">
        <h1 className="title text-lime-500  lg:text-6xl " data-aos="fade-down">
          {Education.title}
        </h1>
        <h4 className="subtitle" data-aos="fade-down">
          {Education.subtitle}
        </h4>

        <br />
        <div className="flex flex-col lg:flex-row justify-evenly">
          <div className="flex flex-col w-full p-10 items-center justify-center">
            {Education.details.map((detail, i) => (
              <div
                data-aos="fade-up"
                data-aos-delay={i * 400}
                key={i}
                className="
                flex flex-col item-end mt-8
               lg:gap-2 lg:p-6 p-6 rounded-2xl  bg-lime-500 "
              >
                <p className="text-white text-xs lg:text-sm">{detail.year}</p>
                <h4 className="text-white">{detail.degree}</h4>
                <p className="text-white text-xs lg:text-sm">
                  {detail.institute}
                </p>
              </div>
            ))}
          </div>

          <img
            src={Education.image}
            alt="about me image"
            data-aos="fade-right"
            className="lg:float-right pt-10"
          />
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

export default Education;
