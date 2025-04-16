import React from "react";
import { motion } from "framer-motion";
import projectData from "./AhievementsSatu";
import { fadeIn } from "../../framerMotion/variants";
import { span } from "framer-motion/client";

function Achievements() {
  return (
    <section
      className="mx-auto max-w-6xl mt-20 p-4 sm:p-10 text-white flex flex-col gap-10 sm:gap-16 items-center justify-center"
      id="acievements"
    >
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center text-6xl text-cyan mb-10 pb-10"
      >
        Achievements
        <p className="text-lg text-center text-white py-10">
          I have Certificates of Appreciation from various Championships,
          including in the fields of marching, religion, class ranking, highest
          score in computer and network engineering and various other fields.
        </p>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {projectData.map((project) => (
          <a
            href={project.link}
            key={project.id}
            target="_blank"
            className="flex flex-col rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-800"
          >
            <img
              src={project.image}
              className="hover:scale-105 transition-transform duration-300"
            />

            <div className="flex flex-col gap-3 bg-gray-900 p-5 transition-colors duration-300 hover:bg-gray-800 flex-grow">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-slate-400">{project.description}</p>
              <div className="flex gap-3 flex-wrap mt-auto">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-indigo-900 rounded-xl text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}

export default Achievements;
