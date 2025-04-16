import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Freelancer",
    date: "2025 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Framework Study",
    company: "Learn to be Independent",
    date: "2025 - Present",
    responsibilities: [
      "Always learn in studying various frameworks.",
      "Increase insight and knowledge about the world of programming.",
      "Provide support for yourself so you don't give up easily.",
    ],
  },
  {
    job: "Marketing",
    company: "TopLoker.com",
    date: "2024 - Present",
    responsibilities: [
      "Teaching good and correct offers.",
      "Participating in internal meetings.",
      "Assisting marketers in learning offer techniques to potential customers.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 my-2 gap-8 md:gap-0">
      {experiences.map((experience, index) => {
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center w-full md:w-auto"
          >
            <SingleExperience experience={experience} />
            {index < experiences.length - 1 && (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="flex items-center justify-center mt-2 md:mt-0 md:mx-20 sm:mb-0"
              >
                <FaArrowRightLong className="text-6xl text-orange rotate-90 md:rotate-0 max-sm:hidden" />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AllExperiences;

//punya classname atas
//
