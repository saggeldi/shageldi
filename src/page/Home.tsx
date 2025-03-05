import { Space } from "antd";
import AboutHome from "../components/Home/AboutHome";
import Advantages from "../components/Home/Advantages";
import Contact from "../components/Home/Contact";
import Experience from "../components/Home/Experience";
import Hero from "../components/Home/Hero";
import Skills from "../components/Home/Skills";
import Works from "../components/Home/Works";

const Home = () => {
  return (
    <Space direction="vertical" size={"large"}>
      <Hero />
      <AboutHome />
      <Skills />
      <Advantages />
      <Works />
      <Experience />
      <Contact />
    </Space>
  );
};

export default Home;
