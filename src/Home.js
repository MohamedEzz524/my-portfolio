import { useState, useEffect, useRef } from "react";
import { FaFileDownload, FaBriefcase } from "react-icons/fa";
import About from "./About.js";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import TextAnimation from "./TextAnimation.js";
import Label from "./Label.js";
import { links } from "./Data_Center.js";
import { AnimatedSection } from "./Components/AnimatedSection/AnimatedSection.js";
import { motion } from "framer-motion";
import Contact from "./Contact.js";

const nav = ["about", "skills", "projects", "contact"];
const words = ["Software Eng.", "Problem Solver.", "Web Developer."];

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState(words[0].charAt(0));
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [activeLink, setActiveLink] = useState("about");
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    nav.forEach((link) => {
      const section = document.getElementById(link);
      if (section) observer.current.observe(section);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const cvPath = process.env.PUBLIC_URL + "/documents/MohamedE._CV.pdf";

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let frameId; //store frame id
    let lastTime = performance.now(); // keep track of the last timestamp
    let delay = isDeleting ? 50 : 150; // speed for typing or deleting
    const type = (currentTime) => {
      if (currentTime - lastTime >= delay) {
        const currentWord = words[currentWordIndex];
        setIsFinished(false);

        if (isDeleting) {
          // Delete a letter
          if (text.length > 0) {
            setText((prev) => prev.slice(0, -1));
          } else {
            // When fully deleted, move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        } else {
          // Add a letter
          if (text.length < currentWord.length) {
            setText((prev) => currentWord.slice(0, prev.length + 1));
          } else {
            // When the word is fully typed, wait before deleting
            setIsFinished(true);
            setTimeout(() => {
              setIsDeleting(true);
            }, 1500); // 1.5s pause
          }
        }

        lastTime = currentTime; // Reset lastTime for next character
      }
      frameId = requestAnimationFrame(type);
    };

    frameId = requestAnimationFrame(type);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [currentWordIndex, isDeleting, text]);

  return (
    <section
      id="home"
      className="section-style snap-section h-screen scroll-smooth "
    >
      <div className="container-hero flex flex-row justify-between max-lg:flex-col overflow-auto  scroll-smooth">
        {/* Left side */}

        <div className="lg:basis-[45%] lg:sticky lg:top-0 max-h-screen flex flex-col lg:gap-[50px] gap-[20px] px-2 max-lg:mb-[3rem]">
          <div className="">
            <p className="fadeBottom text-text font-bold text-[clamp(1rem,2vw+.1rem,1.5rem)] ">
              Hello, I am
            </p>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-mainTitle font-Space font-extrabold text-[clamp(2rem,3vw+.5rem,3.5rem)]"
            >
              Mohamed ElSayed
            </motion.h1>
            <p className="fadeTop relative content-center text-primary text-[clamp(1.2rem,2.5vw+.3rem,2rem)] mb-[10px]  font-medium">
              Creative {text}
              <span
                className={`${
                  isFinished ? "animate-pulse" : ""
                } w-[1.5px] h-[.5em] bg-primary`}
              >
                |
              </span>
            </p>
            <p className="max-w-[400px]  text-text big-body font-medium opacity-90">
              <TextAnimation
                text="I am building and managing Websites and Web Applications lead for engaging, interactive, and user-friendly web
              experiences "
              />
            </p>
          </div>
          <div className="flex gap-4 relative ">
            <div className="relative w-[2px] fadeRight h-full bg-linkHover"></div>
            {!isSmall && (
              <ul className="flex flex-col gap-[20px]">
                {nav.map((item, i) => (
                  <AnimatedSection key={item + i} delay={0.5 * i}>
                    <li className="text-link relative ">
                      <a
                        href={`#${item}`}
                        onClick={() => setActiveLink(item)}
                        className={`flex items-center font-medium w-fit   ${
                          activeLink === item
                            ? "translate-x-5 text-linkActive before:-left-[36px] before:w-8"
                            : "text-link hover:text-linkHover hover:before:-left-[36px] hover:translate-x-5 before:w-5 hover:before:w-8 "
                        } main-trans group cursor-pointer text-[clamp(1rem,1.2vw+.1rem,1.2rem)] before:absolute before:content-[''] before:bottom-[-1px] before:-left-[18px] before:h-[2px] before:bg-linkHover before:rounded-full before:main-trans
                      `}
                      >
                        &lt;
                        <span
                          className={`ml-1 main-trans hover:mr-1.5 ${
                            activeLink === item ? "mr-1" : ""
                          }`}
                        >
                          {item.toUpperCase()}
                        </span>
                        <span
                          className={`${
                            activeLink === item
                              ? "opacity-100 translate-x-0 translate-y-0 rotate-[360deg]"
                              : "opacity-0 translate-x-full -translate-y-full group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-[360deg]"
                          }  main-trans `}
                        >
                          /
                        </span>
                        &gt;
                      </a>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            )}
          </div>
          <div className=" flex gap-5 max-sm:gap-3  py-2  small-body">
            <a
              href="mailto:moelsayed524@gmail.com?subject=Contact"
              target="_blank"
              rel="noopener noreferrer"
              className="fadeRight flex items-center px-[min(5%,1rem)] py-2 rounded-lg border border-text text-text font-semibold bg-white/10 backdrop-blur-cardBlur hover:bg-white/20 hover:shadow-[0_0_24px_rgba(255,255,255,0.1)] hover:-translate-y-1 main-trans "
            >
              <FaBriefcase className="inline-block mr-2 main-trans  text-xl" />
              <TextAnimation text="Hire Me" type="" />
            </a>
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="fadeLeft flex items-center px-[min(5%,1rem)] py-2 rounded-lg bg-buttonBg text-buttonText font-semibold shadow-[0_4px_16px_var(--shadow)] hover:brightness-110 hover:-translate-y-1  main-trans "
            >
              <FaFileDownload className="inline-block mr-2 main-trans " />
              Print CV
            </a>
          </div>
          {!isSmall && (
            <AnimatedSection delay={0.8} className="mt-auto">
              <div className="mt-auto w-full flex items-center gap-3 h-fit flex-wrap  ">
                {links.map((l, i) => (
                  <AnimatedSection key={l.id} delay={`${i * 0.4}`}>
                    <a
                      href={l.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="cursor-pointer  relative group text-primary flex items-center card-style"
                    >
                      {l.icon}
                      <Label text={l.label} />
                    </a>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
        {/* Fixed section */}
        {isSmall && (
          <ul className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col items-center gap-1.5 z-[99]">
            {nav.map((item, i) => (
              <AnimatedSection key={item + i} delay={0.5 * i}>
                <li className="text-link  relative group">
                  <span className="absolute left-0 -translate-x-[150%] rounded-md shadow-md p-1 bg-border small-body opacity-0 pointer-events-none main-trans group-hover:opacity-90 group-hover:-translate-x-[120%] ">
                    {item}
                    <span className="w-0 h-0 absolute right-0 top-1/2 translate-x-full -translate-y-1/2 border-4 border-transparent  border-l-border "></span>
                  </span>
                  <a
                    href={`#${item}`}
                    onClick={() => setActiveLink(item)}
                    className={`flex items-center font-medium w-fit   ${
                      activeLink === item
                        ? "text-linkActive pointer-events-none"
                        : "text-link hover:text-linkHover"
                    } main-trans group cursor-pointer text-[clamp(1rem,1.2vw+.1rem,1.2rem)]`}
                  >
                    &lt;
                    <span
                      className={`ml-1 main-trans hover:mr-1.5 ${
                        activeLink === item ? "" : "mr-1"
                      }`}
                    ></span>
                    <span
                      className={`${
                        activeLink === item
                          ? "opacity-100 translate-x-0 translate-y-0 rotate-[360deg]"
                          : "opacity-0 translate-x-full -translate-y-full group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-[360deg]"
                      }  main-trans `}
                    >
                      /
                    </span>
                    &gt;
                  </a>
                </li>
              </AnimatedSection>
            ))}
          </ul>
        )}
        {/* Right Side */}
        <div className="lg:basis-[52%] h-fit flex flex-col gap-[10px] pl-2 ">
          <AnimatedSection delay={0.2}>
            <About />
          </AnimatedSection>
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
          <AnimatedSection>
            <footer className="w-full text-center py-6 text-text font-medium border-t border-border bg-footerBg backdrop-blur-sm">
              &copy; 2025 Handcrafted by me, Made With ❤️
            </footer>
          </AnimatedSection>
        </div>
        <div className="h-[5rem]"></div>
      </div>
    </section>
  );
}
