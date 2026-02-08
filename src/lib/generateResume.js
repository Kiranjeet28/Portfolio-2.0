import { details, summary, skills, workExperiences, projects } from '../constants/dta.js';
import fs from 'fs';

function generateResumeJSON() {
  const resume = {
    basics: {
      name: details.name,
      email: details.email,
      phone: details.contact,
      linkedin: details.linkedin,
      github: details.github,
      summary: summary.trim(),
    },
    skills: Object.entries(skills).map(([category, items]) => ({
      category,
      keywords: items,
    })),
    work: workExperiences.map(exp => ({
      company: exp.company,
      position: exp.role,
      startDate: exp.duration.split('–')[0].trim(),
      endDate: exp.duration.split('–')[1]?.trim() || 'Present',
      summary: exp.description,
    })),
    projects: projects.map(proj => ({
      name: proj.name,
      description: proj.description,
      url: proj.link,
    })),
  };
  fs.writeFileSync('resume.json', JSON.stringify(resume, null, 2));
  return resume;
}

generateResumeJSON();
export default generateResumeJSON;
