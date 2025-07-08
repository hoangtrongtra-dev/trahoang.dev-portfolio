
import React from "react";

const technologies = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js', 
  'Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis',
  'AWS', 'Docker', 'Kubernetes', 'Git', 'Figma', 'Tailwind CSS'
];

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col items-center py-20">
      <h2 className="text-4xl font-bold text-violet-600 mb-2">Skills & Technologies</h2>
      <p className="text-gray-500 mb-8">A comprehensive toolkit for building modern web applications</p>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-[600px] border border-border rounded-2xl shadow-lg bg-card">
          <thead>
            <tr>
              <th className="px-8 py-4 text-lg font-bold text-violet-700 dark:text-violet-300 text-center">Frontend</th>
              <th className="px-8 py-4 text-lg font-bold text-violet-700 dark:text-violet-300 text-center">Backend</th>
              <th className="px-8 py-4 text-lg font-bold text-violet-700 dark:text-violet-300 text-center">Tools & Others</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-8 py-3 text-center text-foreground transition-colors duration-200 cursor-pointer hover:bg-violet-500 hover:text-white">React/Next.js</td>
              <td className="px-8 py-3 text-center text-foreground transition-colors duration-200 cursor-pointer hover:bg-violet-500 hover:text-white">Node.js</td>
              <td className="px-8 py-3 text-center text-foreground transition-colors duration-200 cursor-pointer hover:bg-violet-500 hover:text-white">AWS/Cloud</td>
            </tr>
            <tr>
              <td className="px-8 py-3 text-center text-foreground transition-colors duration-200 cursor-pointer hover:bg-violet-500 hover:text-white">TypeScript</td>
              <td className="px-8 py-3 text-center text-foreground transition-colors duration-200 cursor-pointer hover:bg-violet-500 hover:text-white">Python</td>
              <td className="px-8 py-3 text-center text-foreground transition-colors duration-200 cursor-pointer hover:bg-violet-500 hover:text-white">Docker</td>
            </tr>
            <tr>
              <td className="px-8 py-3 text-center text-foreground transition-colors duration-200 cursor-pointer hover:bg-violet-500 hover:text-white">Tailwind CSS</td>
              <td className="px-8 py-3 text-center text-foreground transition-colors duration-200 cursor-pointer hover:bg-violet-500 hover:text-white">PostgreSQL</td>
              <td className="px-8 py-3 text-center text-foreground transition-colors duration-200 cursor-pointer hover:bg-violet-500 hover:text-white">Git/GitHub</td>
            </tr>
            <tr>
              <td className="px-8 py-3 text-center text-foreground transition-colors duration-200 cursor-pointer hover:bg-violet-500 hover:text-white">Vue.js</td>
              <td className="px-8 py-3 text-center text-foreground transition-colors duration-200 cursor-pointer hover:bg-violet-500 hover:text-white">MongoDB</td>
              <td className="px-8 py-3 text-center text-foreground transition-colors duration-200 cursor-pointer hover:bg-violet-500 hover:text-white">Figma</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-violet-500 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
