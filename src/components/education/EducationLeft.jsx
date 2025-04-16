import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaReact } from "react-icons/fa";

function EducationLeft({ data }) {
  return (
    <section
      id="education"
      aria-label="Educational Background"
      className="flex h-auto w-full px-4 md:px-12 pt-12 bg-secondary relative mb-[60px]"
    >
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center text-4xl text-cyan absolute top-0"
      >
        Education
      </motion.div>
      <div
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
        itemScope
        itemType="https://schema.org/EducationalOrganization"
      >
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full mt-5"
        >
          <article role="list" aria-label="Education history">
            <ul className="jsx-915351de2799a1b5 list-none p-0 m-0">
              <div
                style={{ opacity: 1, transform: "translate3d(0px, 0px, 0px)" }}
                className=""
              >
                <motion.li
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="jsx-915351de2799a1b5 relative flex gap-4 items-baseline pb-6 "
                >
                  <div
                    style={{ transform: "translateX(-50%)" }}
                    className="jsx-915351de2799a1b5 absolute top-4 left-[7px] w-[3px] h-full bg-accent z-0 glow "
                  ></div>
                  <div className="jsx-915351de2799a1b5 relative flex items-center top-[5px]">
                    <svg
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="jsx-915351de2799a1b5 text-text z-10"
                    >
                      <circle
                        r="7"
                        cx="7"
                        cy="7"
                        fill="white"
                        className="jsx-915351de2799a1b5"
                      ></circle>
                    </svg>
                  </div>
                  <div className="jsx-915351de2799a1b5 text-text">
                    <p className="jsx-915351de2799a1b5 text-2xl mb-1">
                      Computer &amp;{" "}
                      <span className="text-cyan">Network Engineering</span>
                    </p>
                    <p className="jsx-915351de2799a1b5 font-semibold mb-1">
                      SMKN 1 Leuwimunding | June 2021 - April 2024
                    </p>
                    <p className="jsx-915351de2799a1b5">
                      I'm a full-time student in the TKJ program, which stands
                      for Teknik Komputer dan Jaringan (Computer and Network
                      Engineering). This is where I started to learn about
                      networking and many other things.
                    </p>
                  </div>
                </motion.li>
              </div>
              <div
                style={{ opacity: 1, transform: "translate3d(0px, 0px, 0px)" }}
                className=""
              >
                <motion.li
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="jsx-915351de2799a1b5 relative flex gap-4 items-baseline pb-6 pb-0"
                >
                  <div
                    style={{ transform: "translateX(-50%)" }}
                    className="jsx-915351de2799a1b5 absolute top-4 left-[7px] w-[3px] h-full bg-accent z-0 glow hidden"
                  ></div>
                  <div className="jsx-915351de2799a1b5 relative flex items-center top-[5px]">
                    <svg
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="jsx-915351de2799a1b5 text-text z-10"
                    >
                      <circle
                        r="7"
                        cx="7"
                        cy="7"
                        fill="white"
                        className="jsx-915351de2799a1b5"
                      ></circle>
                    </svg>
                  </div>
                  <div className="jsx-915351de2799a1b5 text-text">
                    <p className="jsx-915351de2799a1b5 text-2xl mb-1">
                      Bachelor of{" "}
                      <span className="text-cyan">Informatics Engineering</span>
                    </p>
                    <p className="jsx-915351de2799a1b5 font-semibold mb-1">
                      STEKOM University | June 2024 - Present
                    </p>
                    <p className="jsx-915351de2799a1b5">
                      I'm an undergraduate at STEKOM University pursuing a
                      Bachelor's Degree in Computer Engineering with a full
                      scholarship.
                    </p>
                  </div>
                </motion.li>
              </div>
            </ul>
          </article>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center justify-center"
        >
          <motion.img
            draggable="false"
            alt="React-icons"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            className="h-[200px] block"
            style={{ color: "transparent" }}
            src="./react.svg"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default EducationLeft;
