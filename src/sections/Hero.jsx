import { Leva } from 'leva'; // tool use for the controls the position to set the values of the 3D Model 
import CanvasLoader from '../components/CanvasLoader.jsx';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import { Suspense } from 'react';

const Hero = () => {
    // Use media queries to determine screen size
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            {/* Radial glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.06)_0%,transparent_60%)] pointer-events-none" />

            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-mono">
                    Hi, I am Kiranjeet Kour <span className="waving-hand">👋</span>
                </p>
                {/* <p className="hero_tag text-gray_gradient font-sans ">SOFTWARE DEVELOPER</p> */}
            </div>

            {/* Floating Info Cards */}
         {!isMobile && (
  <>
    {/* Left Card */}
    <div className="absolute left-10 top-1/3 z-10 glassmorphism p-5 rounded-2xl border border-white/5 shadow-2xl flex flex-col gap-2 max-w-[250px] transition-all duration-300 hover:border-purple-500/30 hover:scale-105">
      <span className="text-purple-400 font-bold text-xs tracking-widest uppercase">
        ENGINEERING
      </span>

      <h4 className="text-white font-semibold text-base">
        Full-Stack & System Design
      </h4>

      <p className="text-gray-400 text-[11px] leading-relaxed">
        Building production-grade web & mobile applications with
        scalable architecture, clean code, and high-performance systems.
      </p>
    </div>

    {/* Right Card */}
    <div className="absolute right-10 top-1/3 z-10 glassmorphism p-5 rounded-2xl border border-white/5 shadow-2xl flex flex-col gap-2 max-w-[250px] transition-all duration-300 hover:border-purple-500/30 hover:scale-105">
      <span className="text-purple-400 font-bold text-xs tracking-widest uppercase">
        INTELLIGENCE
      </span>

      <h4 className="text-white font-semibold text-base">
        AI & ML Solutions
      </h4>

      <p className="text-gray-400 text-[11px] leading-relaxed">
        Integrating machine learning models and AI-driven features
        to deliver intelligent, data-powered user experiences.
      </p>
    </div>
  </>
)}

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                    {/* To hide controller */}
                    <Leva hidden />
                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
                    </HeroCamera>

                    {!isMobile && (
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Rings position={sizes.ringPosition} />
                            <Cube position={sizes.cubePosition} />
                        </group>
                    )}

                    <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
