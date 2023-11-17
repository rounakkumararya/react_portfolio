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
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Education />
      </section>
      <section>
        <Achievements />
      </section>
      <Skills />
      <section>
        <Services />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Contact />
      </section>

      <footer className="p-3 text-center">
        <h6 className="mb-3">Rounak kumar arya</h6>
        <p>Arya© All CopyRights Reserved 2022</p>
      </footer>
    </div>
  );
};

export default App;
