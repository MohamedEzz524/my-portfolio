import HeroTitle from "./Hero_title";
import { projects, recentWork } from "./Data_Center";
import { FaArrowUp, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const notes = [
  {
    id: "not1",
    title: "More React Work",
    link: "https://github.com/MohamedEzz524/React-apps",
  },
  {
    id: "not2",
    title: "CSS Animation",
    link: "https://github.com/MohamedEzz524/Css-animation",
  },
  {
    id: "not3",
    title: "Problem Solving",
    link: "https://github.com/MohamedEzz524/Problem-solving",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-style pb-[20px] border-divider">
      <HeroTitle title={`<PROJECTS>`} />

      <div className="max-md:px-2 py-4 flex flex-col gap-5 ">
        {/* RecentWork */}
        <h3 className="card-title">Recent Apps</h3>
        {recentWork.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} />
        ))}

        {/* Project */}
        <h3 className="card-title">My Projects</h3>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} />
        ))}
        <span className="section-divider"></span>
        <div
          className="p-6 mb-4 rounded-2xl border backdrop-blur-md shadow-md animate-fade-bottom transition-all"
          style={{
            background: "var(--card-bg)",
            borderColor: "var(--card-border)",
            boxShadow: "0 4px 15px var(--card-glow)",
            color: "var(--text)",
          }}
        >
          {/* Notes */}
          <p className="mb-4 big-body leading-relaxed ">
            <strong>Note:</strong> There are many more apps uploaded on GitHub,
            including problem-solving solutions and competitive programming
            work. Explore them through these links.
          </p>

          <div className="flex flex-col gap-3 small-body">
            {notes.map(({ id, title, link }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="font-semibold main-trans text-link hover:text-linkHover hover:translate-x-1"
              >
                ➔ {title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <HeroTitle title={`</PROJECTS>`} />
    </section>
  );
}

const ProjectCard = ({ p, i }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.3 }}
        key={p.id}
      >
        <div
          className={` flex flex-col gap-2.5 border-divider group items-start relative z-[1] rounded-lg main-trans shadow-lg text-[clamp(0.9rem,1vw+0.3rem,1.1rem)] `}
        >
          {/* Device Mockups - Left Column */}
          <div className="flex flex-col sm:flex-row gap-2.5 max-sm:card-style">
            <div className="flex flex-col gap-2.5 sm:w-52 ">
              <div className="relative">
                <div className="desktop-mockup w-full h-full rounded-lg overflow-hidden shadow-xl border-[6px] border-[#374151]">
                  <img
                    src={p.large}
                    alt={`${p.title} desktop view`}
                    loading="lazy"
                    decoding="async"
                    className={` w-full object-cover transition-opacity duration-300 group-hover:opacity-100 opacity-80`}
                  />
                </div>

                <div className="mobile-mockup z-10 absolute bottom-1 rotate-2 right-1 max-sm:w-14 w-10 h-auto border-4 border-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                  <img
                    src={p.small}
                    loading="lazy"
                    decoding="async"
                    alt={`${p.title} mobile view`}
                    className={`w-full h-auto object-cover transition-brightness duration-300 `}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2.5 sm:justify-between p-1">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 ring-style rounded-lg text-buttonText group font-bold small-body shadow-[0_2px_4px_var(--shadow)]  transition-all duration-300 hover:shadow-lg bg-buttonBg hover:bg-buttonHover flex items-center gap-1"
                >
                  Live
                  <FaArrowUp className="rotate-45 main-trans group-hover:translate-x-1  group-hover:-translate-y-1" />
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg font-medium small-body border border-primary text-primary shadow-[0_2px_4px_var(--shadow)] transition-all duration-300 hover:shadow-lg  group flex items-center gap-2"
                >
                  Code
                  <FaGithub className=" main-trans group-hover:scale-105 " />
                </a>
              </div>
            </div>

            {/* Desc */}
            <div className="sm:card-style space-y-2">
              <h3 className="underline font-semibold text-primary title-body">
                {p.title}
              </h3>
              <p className="opacity-90 big-body text-text font-medium">
                {p.desc}
              </p>
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-wrap w-full gap-2.5 items-center bg-cardBg group  rounded-xl p-4 justify-between">
            <div className="flex flex-wrap justify-end flex-1 gap-2">
              {p.tools.map((tool) => (
                <span key={tool} className="tool-style">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      {i !== projects.length - 1 && <span className="section-divider"></span>}
    </>
  );
};
