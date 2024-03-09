import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Center,
  AccumulativeShadows,
  RandomizedLight,
} from "@react-three/drei";
import { AndroidModelViewer } from "./AndroidLoader";
import { Col, Row } from "antd";
import HeroText from "./HeroText";
import Loader from "./Loader";

const Hero = () => {
  return (
    <div>
      <Row
        align={"stretch"}
        justify={"center"}
        style={{
          paddingTop: "100px",
        }}
      >
        <Col xs={12}>
          <HeroText />
        </Col>
        <Col xs={12} style={{ height: "70vh" }}>
          <Canvas shadows camera={{ position: [0, 1.5, -10], fov: 35 }}>
            <ambientLight intensity={Math.PI} />
            <spotLight
              position={[5, 2, 5]}
              angle={0.2}
              penumbra={1}
              decay={0}
              intensity={1}
              shadow-mapSize={256}
              castShadow
            />
            <Suspense fallback={<Loader />}>
              <Center top>
                <AndroidModelViewer scale={0.6} />
              </Center>
              <AccumulativeShadows
                frames={100}
                temporal
                alphaTest={0.75}
                color="pink"
              >
                <RandomizedLight radius={8} position={[5, 3, -5]} />
              </AccumulativeShadows>
            </Suspense>
            <OrbitControls />
          </Canvas>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
