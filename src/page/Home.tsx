import AboutHome from "../components/Home/AboutHome";
import Advantages from "../components/Home/Advantages";
import Contact from "../components/Home/Contact";
import Experience from "../components/Home/Experience";
import Hero from "../components/Home/Hero";
import Skills from "../components/Home/Skills";
import Works from "../components/Home/Works";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutHome />
      <Skills />
      <Advantages />
      <Works />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
