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
    <section className=" min-h-fit bg-stone-100" id="skills">
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

      <div className=" px-32  py-14">
        <h1
          className="title text-red-900  lg:text-6xl text-start"
          data-aos="fade-down"
        >
          {Education.title}
        </h1>
        <h4 className="subtitle" data-aos="fade-down">
          {Education.subtitle}
        </h4>

        <br />
        <div className="flex justify-evenly">
          <div className="flex flex-col w-full items-center justify-center">
            {Education.details.map((detail, i) => (
              <div
                data-aos="fade-up"
                data-aos-delay={i * 400}
                key={i}
                className="sm:cursor-pointer  
               relative  flex flex-col item-end mt-8
               gap-2 p-6 rounded-2xl  bg-red-800 "
              >
                <p className="text-white">{detail.year}</p>
                <h4 className="text-white">{detail.degree}</h4>
                <p className="text-white">{detail.institute}</p>
              </div>
            ))}
          </div>
          <img
            src={Education.image}
            alt="about me image"
            data-aos="fade-right"
            className="float-right"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
