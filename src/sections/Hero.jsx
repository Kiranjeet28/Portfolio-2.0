import { Leva } from 'leva'; // tool use for the controls the position to set the values of the 3D Model 
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import React, { lazy, Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import Button from '../components/Button.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';

const Cube = lazy(() => import('../components/Cube.jsx'));
const Rings = lazy(() => import('../components/Rings.jsx'));
const ReactLogo = lazy(() => import('../components/ReactLogo.jsx'));
const Target = lazy(() => import('../components/Target.jsx'));
const HackerRoom = lazy(() => import('../components/HackerRoom.jsx'));

const Hero = () => {
    // Use media queries to determine screen size
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-mono">
                    Hi, I am Kiranjeet Kour <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient font-sans">Exculsive Solutions</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        {/* To hide controller */}
                        <Leva hidden />
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamera isMobile={isMobile}>
                            <Suspense fallback={null}>
                                <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
                            </Suspense>
                        </HeroCamera>
                        {!isMobile && (
                            <group>
                                <Suspense fallback={null}>
                                    <Target position={sizes.targetPosition} />
                                </Suspense>
                                <Suspense fallback={null}>
                                    <ReactLogo position={sizes.reactLogoPosition} />
                                </Suspense>
                                <Suspense fallback={null}>
                                    <Rings position={sizes.ringPosition} />
                                </Suspense>
                                <Suspense fallback={null}>
                                    <Cube position={sizes.cubePosition} />
                                </Suspense>
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