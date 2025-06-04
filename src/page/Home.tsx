import { lazy, Suspense } from "react";

const AboutHome = lazy(() => import("../components/Home/AboutHome"));
const Advantages = lazy(() => import("../components/Home/Advantages"));
const Contact = lazy(() => import("../components/Home/Contact"));
const Experience = lazy(() => import("../components/Home/Experience"));
const Hero = lazy(() => import("../components/Home/Hero"));
const Skills = lazy(() => import("../components/Home/Skills"));
const Works = lazy(() => import("../components/Home/Works"));

const Home = () => {
  return (
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
        <Suspense fallback={<div>Loading Hero...</div>}>
          <div id="hero">
            <Hero />
          </div>
        </Suspense>
        <Suspense fallback={<div>Loading About...</div>}>
          <div id="about">
            <AboutHome />
          </div>
        </Suspense>
        <Suspense fallback={<div>Loading Skills...</div>}>
          <div id="skills">
            <Skills />
          </div>
        </Suspense>
        <Suspense fallback={<div>Loading Advantages...</div>}>
          <div id="advantages">
            <Advantages />
          </div>
        </Suspense>
        <Suspense fallback={<div>Loading Works...</div>}>
          <div id="works">
            <Works />
          </div>
        </Suspense>
        <Suspense fallback={<div>Loading Experience...</div>}>
          <div id="experience">
            <Experience />
          </div>
        </Suspense>
        <Suspense fallback={<div>Loading Contact...</div>}>
          <div id="contact">
            <Contact />
          </div>
        </Suspense>
      </div>

  );
};

export default Home;
