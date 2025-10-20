import { lazy, Suspense } from "react";
import LazySection from "../components/ui/LazySection";
import { Spin } from "antd";

const AboutHome = lazy(() => import("../components/Home/AboutHome"));
const Advantages = lazy(() => import("../components/Home/Advantages"));
const Certificates = lazy(() => import("../components/Home/Certificates"));
const Contact = lazy(() => import("../components/Home/Contact"));
const Experience = lazy(() => import("../components/Home/Experience"));
const Hero = lazy(() => import("../components/Home/Hero"));
const Skills = lazy(() => import("../components/Home/Skills"));
const Works = lazy(() => import("../components/Home/Works"));

const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
    <Spin size="large" />
  </div>
);

const Home = () => {
  return (
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px", minWidth: "100%", maxWidth: "100%", overflowX:"hidden" }}>
        <Suspense fallback={<LoadingSpinner />}>
          <div id="hero">
            <Hero />
          </div>
        </Suspense>
        
        <LazySection fallback={<LoadingSpinner />}>
          <Suspense fallback={<LoadingSpinner />}>
            <div id="about" style={{ minWidth: "100%" }}>
              <AboutHome />
            </div>
          </Suspense>
        </LazySection>
        
        <LazySection fallback={<LoadingSpinner />}>
          <Suspense fallback={<LoadingSpinner />}>
            <div id="skills">
              <Skills />
            </div>
          </Suspense>
        </LazySection>
        
        <LazySection fallback={<LoadingSpinner />}>
          <Suspense fallback={<LoadingSpinner />}>
            <div id="advantages">
              <Advantages />
            </div>
          </Suspense>
        </LazySection>
        
        <LazySection fallback={<LoadingSpinner />}>
          <Suspense fallback={<LoadingSpinner />}>
            <div id="works">
              <Works />
            </div>
          </Suspense>
        </LazySection>
        
        <LazySection fallback={<LoadingSpinner />}>
          <Suspense fallback={<LoadingSpinner />}>
            <div id="experience">
              <Experience />
            </div>
          </Suspense>
        </LazySection>
        
        <LazySection fallback={<LoadingSpinner />}>
          <Suspense fallback={<LoadingSpinner />}>
            <div id="certificates">
              <Certificates />
            </div>
          </Suspense>
        </LazySection>
        
        <LazySection fallback={<LoadingSpinner />}>
          <Suspense fallback={<LoadingSpinner />}>
            <div id="contact">
              <Contact />
            </div>
          </Suspense>
        </LazySection>
      </div>
  );
};

export default Home;
