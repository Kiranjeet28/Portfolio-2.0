import React from 'react';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="mt-12 flex flex-col gap-6 max-w-4xl mx-auto">
          {workExperiences.map((item, index) => (
            <div
              key={index}
              className="group border border-white/5 bg-black-200/40 backdrop-blur-md p-6 rounded-2xl shadow-xl transition-all duration-300 hover:border-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.06)] hover:-translate-y-0.5 flex sm:flex-row flex-col gap-5 items-start">
              
              <div className="flex flex-row sm:flex-col justify-start items-center gap-4">
                <div className="rounded-2xl w-16 h-16 p-2 bg-black-600 border border-white/5 shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:border-purple-500/40 flex items-center justify-center shrink-0">
                  <img className="w-full h-full object-contain rounded-xl" src={item.icon} alt={item.name + ' logo'} />
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-white text-lg tracking-wide group-hover:text-purple-300 transition-colors duration-300">{item.name}</h4>
                  <span className="text-xs font-semibold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 w-fit shrink-0">
                    {item.duration}
                  </span>
                </div>
                <p className="text-purple-400/90 text-xs font-bold mb-3 tracking-widest uppercase">{item.pos}</p>
                <p className="text-white-600 text-sm leading-relaxed font-light">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;