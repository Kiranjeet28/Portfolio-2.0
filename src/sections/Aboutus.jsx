import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import { OrbitingSkills } from '../components/OrbitCircular.jsx';
import { NeonGradientCard } from '../components/animations/borderAnimation.jsx';
import { Canvas } from '@react-three/fiber';
import { Keyboard } from '../components/animations/keyboard.jsx';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader.jsx';
const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    const handleCopy = () => {
        navigator.clipboard.writeText('kiranjeetkour144@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };
    const options = [8, 4, 9, 4, 0];
    const [selected, setSelected] = useState(9);
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <NeonGradientCard borderSize={1} className=" flex items-center justify-center text-center">
                            <img src="assets/about1.jpg" alt="grid-1" className=" rounded-md" />
                        </NeonGradientCard>
                        <div>
                            <p className="grid-headtext">Hi, I’m Kiranjeet Kour</p>
                            <p className="grid-subtext">
                                With 4 years of experience, I specialize as a Software Engineer focusing on frontend and backend development, deployment, and AI/ML solutions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <OrbitingSkills />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I work across frontend and backend stacks, deployment pipelines, and AI/ML frameworks to build scalable, production-ready systems.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 40, lng: -100, text: 'Ludhiana, India', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                            <p className="grid-subtext">I&apos;m based in India and open to remote work worldwide.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <Canvas className="w-full h-full">
                            <Suspense fallback={<CanvasLoader />}>

                                <PerspectiveCamera makeDefault position={[0, 10, -7]} />
                                <OrbitControls enableZoom={false} />

                                <ambientLight intensity={0.5} />
                                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                                <pointLight position={[-10, -10, -10]} intensity={0.5} />


                                <Keyboard position={[0, 0, 0]} rotation={[0.1, -Math.PI, 0]} scale={[2.5, 3, 3]} />
                            </Suspense>

                        </Canvas>
                        <div>
                            <p className="grid-headtext">My Passion for Software Engineering</p>
                            <p className="grid-subtext">
                                I love solving problems, building production systems, and applying AI/ML to create intelligent features. Software engineering isn&apos;t just my profession—it&apos;s my passion.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                           
                         <div className="space-y-3">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">Kiranjeetkour@gmail.com</p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6 mt-10 items-center justify-center">
      <a href="/assets/Resume.pdf" download className="group relative inline-flex h-14 w-48 overflow-hidden rounded-full p-[2px] shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-indigo-900 via-indigo-700 to-purple-600 px-6 py-2 text-lg font-semibold text-white backdrop-blur-3xl group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-900">
          <svg className="mr-2 w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          Resume
        </span>
      </a>
      <a href="/assets/CV.pdf" download className="group relative inline-flex h-14 w-48 overflow-hidden rounded-full p-[2px] shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-indigo-700 to-indigo-900 px-6 py-2 text-lg font-semibold text-white backdrop-blur-3xl group-hover:bg-gradient-to-r group-hover:from-indigo-900 group-hover:to-purple-600">
          <svg className="mr-2 w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          CV
        </span>
      </a>
    </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;