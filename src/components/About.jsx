import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaJava, FaLinux } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiPostgresql, SiMongodb, SiTensorflow, SiTypescript, SiSpringboot, SiDotnet, SiAngular, SiMysql, SiGithubactions, SiNextdotjs, SiJavascript, SiFirebase } from 'react-icons/si';
import useScrollReveal from '../hooks/useScrollReveal';

function About() {
  const sectionRef = useScrollReveal();

  const stack = [
    {
      category: "Frontend & Mobile",
      items: [
        { name: "React", icon: <FaReact size={28} className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs size={28} className="text-black dark:text-white" /> },
        { name: "JavaScript", icon: <SiJavascript size={28} className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript size={28} className="text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={28} className="text-[#06B6D4]" /> },
        { name: "Flutter", icon: <SiFlutter size={28} className="text-[#02569B]" /> },
      ]
    },
    {
      category: "Backend & Services",
      items: [
        { name: "Java", icon: <FaJava size={28} className="text-[#007396]" /> },
        { name: "Spring Boot", icon: <SiSpringboot size={28} className="text-[#6DB33F]" /> },
        { name: ".NET", icon: <SiDotnet size={28} className="text-[#512BD4]" /> },
        { name: "Node.js", icon: <FaNodeJs size={28} className="text-[#339933]" /> },
        { name: "Python", icon: <FaPython size={28} className="text-[#3776AB]" /> },
        { name: "Firebase", icon: <SiFirebase size={28} className="text-[#FFCA28]" /> },
      ]
    },
    {
      category: "Data & Infrastructure",
      items: [
        { name: "MongoDB", icon: <SiMongodb size={28} className="text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql size={28} className="text-[#4479A1]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={28} className="text-[#4169E1]" /> },
        { name: "Docker", icon: <FaDocker size={28} className="text-[#2496ED]" /> },
        { name: "Linux", icon: <FaLinux size={28} className="text-[#FCC624]" /> },
        { name: "GitHub Actions", icon: <SiGithubactions size={28} className="text-[#2088FF]" /> },
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-white dark:bg-[#0c0c0e]"
    >
      <div className="mx-auto max-w-6xl px-7">
        <div className="mb-12 max-w-2xl">
          <p className="reveal-blur mb-3 text-xs uppercase tracking-[0.3em] text-accent-bright">
            Our Foundation
          </p>
          <h2 className="reveal-blur stagger-1 mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] text-gray-900 dark:text-text leading-[1.1]">
            World-class technologies <br />
            <span className="text-gray-400 dark:text-gray-600">for scalable solutions.</span>
          </h2>
          <p className="reveal-fade-up stagger-2 text-[1.05rem] text-gray-600 dark:text-muted max-w-lg leading-relaxed">
            We rely on battle-tested open source frameworks and cloud infrastructure to ensure your products are secure, fast, and future-proof.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stack.map((group, idx) => (
            <div key={idx} className={`reveal-scale stagger-${idx + 1} rounded-3xl bg-white/50 dark:bg-[#0c0c0e] p-8 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
              <h3 className="mb-6 font-display text-lg font-semibold text-gray-900 dark:text-text border-b border-gray-200 dark:border-white/10 pb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {group.items.map((tech, tIdx) => (
                  <div key={tIdx} className="flex flex-col items-center gap-3 text-center group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-[#0c0c0e] shadow-sm ring-1 ring-gray-200 dark:ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:ring-accent-bright/30">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-muted transition-colors group-hover:text-gray-900 dark:group-hover:text-text">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
