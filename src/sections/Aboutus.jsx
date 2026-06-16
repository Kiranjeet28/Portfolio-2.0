
import { useState } from "react";
import { OrbitingSkills } from "../components/OrbitCircular.jsx";
import { NeonGradientCard } from "../components/animations/borderAnimation.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

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
      {/* HEADER */}
      <div className="mb-14 text-center">
        <h2 className="head-text">
          About Me
        </h2>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

        {/* HERO */}
        <div className="xl:col-span-2">
          <div className="grid-container h-full">

            <div className="flex flex-col lg:flex-row items-center gap-8">

              <NeonGradientCard
                borderSize={1}
                className="w-[250px] h-[250px] flex items-center justify-center overflow-hidden"
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
                  Software Engineer focused on building modern web
                  and mobile applications that solve real-world
                  problems. I enjoy creating scalable products,
                  designing efficient backend systems, and
                  integrating AI-powered features that improve
                  user experiences.

                  My goal is to transform ideas into
                  production-ready solutions that deliver
                  measurable value.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400">
                    Full-Stack Developer
                  </span>

                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400">
                    AI/ML Engineer
                  </span>

                  <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400">
                    System Design
                  </span>

                  <span className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-400">
                    Problem Solver
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

            <div className="mt-6">

              <p className="grid-headtext">
                Tech Arsenal
              </p>

              <div className="grid-subtext mt-4 space-y-3">

                <p>
                  <span className="text-white font-semibold">
                    Frontend:
                  </span>{" "}
                  React, Next.js, TypeScript
                </p>

                <p>
                  <span className="text-white font-semibold">
                    Backend:
                  </span>{" "}
                  Node.js, Express.js
                </p>

                <p>
                  <span className="text-white font-semibold">
                    Database:
                  </span>{" "}
                  MongoDB, PostgreSQL
                </p>

                <p>
                  <span className="text-white font-semibold">
                    AI / ML:
                  </span>{" "}
                  Python, Machine Learning
                </p>

                <p>
                  <span className="text-white font-semibold">
                    Tools:
                  </span>{" "}
                  Docker, Git, Cloud Deployment
                </p>

              </div>

            </div>

          </div>
        </div>

        {/* EDUCATION */}
        <div>
          <div className="grid-container h-full">

            <p className="grid-headtext">
              Education
            </p>

            <div className="mt-6 space-y-6">

              <div>
                <h4 className="font-bold text-white">
                  B.Tech Computer Science
                </h4>

                <p className="text-neutral-400">
                  Guru Nanak Dev Engineering College
                </p>

                <p className="text-sm text-neutral-500">
                  2024 – 2027
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white">
                  Diploma in Computer Engineering
                </h4>

                <p className="text-neutral-400">
                  Government Polytechnic for Women, Jammu
                </p>

                <p className="text-sm text-neutral-500">
                  2021 – 2024
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* EXPERIENCE */}
        <div>
          <div className="grid-container h-full">
<div className="grid-container">

            <p className="grid-headtext text-center">
              Let's Build
            </p>

            <div
              className="copy-container "
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

            <div className="flex justify-center ">

              <a
                href="/assets/Resume.pdf"
                download
                className="btn"
              >
                Download Resume
              </a>

            </div>
 <div className="flex justify-center ">

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
        </div>



      </div>
    </section>
  );
};

export default About;
