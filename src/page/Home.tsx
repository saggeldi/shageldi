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
    <div style={{
        width: "100%",
        display: "flex",
        flexDirection:"column",
        gap:"20px"
    }}>
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading About...</div>}>
        <AboutHome />
      </Suspense>
      <Suspense fallback={<div>Loading Skills...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Loading Advantages...</div>}>
        <Advantages />
      </Suspense>
      <Suspense fallback={<div>Loading Works...</div>}>
        <Works />
      </Suspense>
      <Suspense fallback={<div>Loading Experience...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
