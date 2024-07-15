// import components
import {
  Hero,
  Contact,
  Services,
  Education,
  Testimonials,
  About,
  Skills,
  Achievements,
  Projects,
  Cursor,
} from "./components";
import Navbar from "./Layouts/Navbar";
import { useEffect } from "react";
import "./App.css";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div className="">
      <Cursor />

      <section id="home">
        <Navbar />
        <Hero></Hero>
      </section>
      <section>
        <About />
      </section>

      <section>
        <Achievements />
      </section>
      <section>
        <Education />
      </section>

      <Skills />

      <section>
        <Projects />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Contact />
      </section>

      <footer className="p-3 bg-zinc-900 text-center ">
        <h6 className=" text-lime-500 mb-3">Rounak kumar arya</h6>
        <p className="text-white">
          Arya© All CopyRight Reserved {new Date().getFullYear()}{" "}
        </p>
      </footer>
    </div>
  );
};

export default App;
