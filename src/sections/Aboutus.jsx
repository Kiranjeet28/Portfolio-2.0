
import { useState, Suspense } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { OrbitingSkills } from "../components/OrbitCircular.jsx";
import { NeonGradientCard } from "../components/animations/borderAnimation.jsx";
import { Canvas } from "@react-three/fiber";
import { Keyboard } from "../components/animations/keyboard.jsx";
import {
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "../components/CanvasLoader.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: 768,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "kiranjeetkour144@gmail.com"
    );
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section
      className="c-space my-24"
      id="about"
    >
      <div className="mb-12 text-center">
        <h2 className="head-text">
          About Me
        </h2>

        <p className="text-neutral-400 mt-4 max-w-3xl mx-auto">
          Full Stack Developer, Software Engineer,
          AI Enthusiast and Cybersecurity Learner
          passionate about building impactful
          digital experiences.
        </p>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

        {/* HERO CARD */}
        <div className="xl:col-span-2">
          <div className="grid-container h-full">
            <div className="flex flex-col lg:flex-row gap-8 items-center">

              <NeonGradientCard
                borderSize={1}
                className="w-[260px] h-[260px] flex items-center justify-center overflow-hidden"
              >
                <img
                  src="assets/about1.jpg"
                  alt="Kiranjeet Kour"
                  className="w-full h-full object-cover rounded-xl"
                />
              </NeonGradientCard>

              <div className="flex-1">
                <p className="text-blue-400 uppercase tracking-widest text-sm mb-2">
                  Software Engineer
                </p>

                <h3 className="text-4xl font-bold text-white">
                  Hi, I'm Kiranjeet Kour 👋
                </h3>

                <p className="text-neutral-400 leading-8 mt-5">
                  I am a Computer Science student and
                  Full Stack Developer passionate
                  about building scalable web
                  applications, modern user
                  experiences, AI-powered systems,
                  and secure digital products.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400">
                    900+ Users
                  </span>

                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400">
                    Full Stack
                  </span>

                  <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400">
                    AI & Security
                  </span>

                  <span className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-400">
                    Open Source
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TECH STACK */}
        <div className="xl:row-span-2">
          <div className="grid-container h-full">
            <OrbitingSkills />

            <div>
              <p className="grid-headtext">
                Tech Arsenal
              </p>

              <p className="grid-subtext">
                React, Next.js, TypeScript,
                Node.js, MongoDB, PostgreSQL,
                AWS, Docker, AI/ML and
                Cybersecurity.
              </p>
            </div>
          </div>
        </div>

        {/* JOURNEY */}
        <div>
          <div className="grid-container h-full">
            <p className="grid-headtext">
              My Journey
            </p>

            <div className="mt-6 space-y-5">

              <div>
                <h4 className="font-bold text-white">
                  Diploma
                </h4>

                <p className="text-neutral-400">
                  Govt. Polytechnic for Women,
                  Jammu
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white">
                  B.Tech CSE
                </h4>

                <p className="text-neutral-400">
                  GNDEC Ludhiana
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white">
                  Full Stack Development
                </h4>

                <p className="text-neutral-400">
                  Building production-ready
                  applications.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white">
                  Future Goal
                </h4>

                <p className="text-neutral-400">
                  Networking, Security Analysis,
                  DevOps & Systems Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <div className="grid-container h-full">

            <p className="grid-headtext text-center">
              Let's Connect
            </p>

            <p className="grid-subtext text-center mb-6">
              Open for internships, freelance
              work and collaborations.
            </p>

            <div
              className="copy-container"
              onClick={handleCopy}
            >
              <img
                src={
                  hasCopied
                    ? "assets/tick.svg"
                    : "assets/copy.svg"
                }
                alt="copy"
              />

              <p className="text-white font-medium">
                kiranjeetkour144@gmail.com
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">

              <a
                href="/assets/Resume.pdf"
                download
                className="btn"
              >
                Download Resume
              </a>

              <a
                href="/assets/CV.pdf"
                download
                className="btn"
              >
                Download CV
              </a>

            </div>
          </div>
        </div>

        {/* KEYBOARD SHOWCASE */}
        {!isMobile && (
          <div className="xl:col-span-2">
            <div className="grid-container">

              <div className="h-[350px]">
                <Canvas>
                  <Suspense
                    fallback={<CanvasLoader />}
                  >
                    <PerspectiveCamera
                      makeDefault
                      position={[0, 10, -7]}
                    />

                    <OrbitControls
                      enableZoom={false}
                    />

                    <ambientLight intensity={0.6} />

                    <spotLight
                      position={[10, 10, 10]}
                      intensity={1}
                    />

                    <Keyboard
                      position={[0, 0, 0]}
                      rotation={[
                        0.1,
                        -Math.PI,
                        0,
                      ]}
                      scale={[2.5, 3, 3]}
                    />
                  </Suspense>
                </Canvas>
              </div>

              <div>
                <p className="grid-headtext">
                  Building Software That Solves
                  Real Problems
                </p>

                <p className="grid-subtext">
                  From student platforms with
                  thousands of views to modern
                  full-stack applications and
                  AI-powered solutions, I enjoy
                  turning ideas into meaningful
                  products.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* GLOBE */}
        {!isMobile && (
          <div>
            <div className="grid-container">

              <div className="flex justify-center">
                <Globe
                  height={280}
                  width={280}
                  backgroundColor="rgba(0,0,0,0)"
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                />
              </div>

              <div>
                <p className="grid-headtext">
                  Global Collaboration
                </p>

                <p className="grid-subtext">
                  Based in India and available
                  for remote opportunities
                  worldwide.
                </p>

                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-6"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;