import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { a } from "framer-motion/client";

const projects = [
  {
    name: "Linktree TopLoker",
    year: "January 2025",
    align: "right",
    image: "../../public/images/LinktreeTopLoker.png",
    link: "https://toploker.vercel.app/",
  },
  {
    name: "ChatBot WhatsApp",
    year: "December 2024",
    align: "left",
    image: "../../public/images/chatbot.png",
    link: "https://wa.me/6283822528904",
  },
  {
    name: "Website Portfolio",
    year: "March 2025",
    align: "right",
    image: "../../public/images/projectportfolio.png",
    link: "#",
  },
  // {
  //   name: "Bank of Luck",
  //   year: "May2024",
  //   align: "left",
  //   image: "../../public/images/website-img-4.jpg",
  //   link: "#",
  // },
];

const ProjectsMain = () => {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-4 mb-[80px]">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsMain;
