import HeroTitle from "./Hero_title";
import { projects, recentWork } from "./Data_Center";
import { FaArrowUp, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="section-style pb-[20px] border-divider">
      <HeroTitle title={`<PROJECTS>`} />
      {/* Recent Work */}

      {/* Project */}
      <div className="px-5 max-md:px-2 py-4 flex flex-col gap-5 border-l border-l-sectionTitle max-sm:border-none max-sm:p-0">
        {/* RecentWork */}
        <h3 className="card-title">Recent Apps</h3>
        {recentWork.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} />
        ))}
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
          <p className="mb-4 big-body leading-relaxed ">
            <strong>Note:</strong> There are many more apps uploaded on GitHub,
            including problem-solving solutions and competitive programming
            work. Explore them through these links.
          </p>

          <div className="flex flex-col gap-3 small-body">
            <a
              href="https://github.com/MohamedEzz524/React-apps"
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold main-trans text-link hover:text-linkHover"
            >
              ➔ More React Work
            </a>

            <a
              href="https://github.com/MohamedEzz524/Css-animation"
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold main-trans text-link hover:text-linkHover"
            >
              ➔ CSS Animation
            </a>

            <a
              href="https://github.com/MohamedEzz524/Problem-solving"
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold main-trans text-link hover:text-linkHover"
            >
              ➔ Problem Solving
            </a>
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
          className={`flex flex-col md:flex-row border-divider group items-start flex-wrap gap-[10px] relative z-[1] rounded-lg main-trans hover:-translate-y-1 shadow-lg text-[clamp(0.9rem,1vw+0.3rem,1.1rem)] `}
        >
          {/* Device Mockups - Left Column */}
          <div className=" bg-cardBg rounded-lg flex flex-row max-sm:flex-col p-4 gap-10 border border-border">
            <div className="mockup-container relative max-sm:w-full  w-1/3 shrink-0  lg:basis-[clamp(100px,10vw+5rem,250px)] h-full">
              <div className="desktop-mockup w-full h-auto rounded-lg overflow-hidden shadow-xl border-8 border-sectionBg">
                <img
                  src={p.large}
                  alt={`${p.title} desktop view`}
                  loading="lazy"
                  decoding="async"
                  className={` w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-100 opacity-80`}
                />
              </div>

              <div className="mobile-mockup z-10 absolute -bottom-2 -right-3 max-sm:w-14 w-10 md:w-12 h-auto border-4 border-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={p.small}
                  loading="lazy"
                  decoding="async"
                  alt={`${p.title} mobile view`}
                  className={`w-full h-auto object-cover transition-brightness duration-300 `}
                />
              </div>
            </div>
            {/* Desc */}
            <div className="md:w-1/2 md:flex-1 w-full space-y-3 text-text">
              <h3 className="underline font-semibold text-primary title-body">
                {p.title}
              </h3>
              <p className="opacity-90 big-body font-medium">{p.desc}</p>
            </div>
          </div>

          {/* Tools */}
          <div className="flex max-sm:flex-col max-sm:gap-6 w-full xl:items-center items-start bg-cardBg rounded-xl p-4 justify-between gap-2">
            <div className="flex gap-4 ">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg text-buttonText font-bold small-body shadow-[0_2px_4px_var(--shadow)]  transition-all duration-300 hover:shadow-lg bg-buttonBg flex items-center gap-1  group"
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
                Code <FaGithub className=" main-trans group-hover:scale-105 " />
              </a>
            </div>
            <div className="flex flex-wrap justify-end flex-1 gap-2">
              {p.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full text-xs sm:text-sm  text-text font-medium bg-cardBg border border-cardBorder"
                >
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
