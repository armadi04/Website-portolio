import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import SingleContactSocial from "../contactMeSection/SingleContactSocial";
import { FaYoutube } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const HeroText = () => {
  return (
    <div
      id="home"
      aria-label="Educational Background"
      className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center"
    >
      <motion.h2
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Front-End Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Armadi <br className="sm:hidden md:block" />
        Nurhidayat
      </motion.h1>
      <motion.p
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 max-md:mb-1"
      >
        A Passionate Web Developer <br /> with 3 months of experience.
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex gap-4 mt-5 max-md:mb-20 max-md:justify-center md:text-start sm:text-center"
      >
        <SingleContactSocial
          link="https://youtube.com/@football_story09?si=5tQy4PPFl5Hlk0-i"
          Icon={FaYoutube}
          title="Subscribe Now!"
        />
        <SingleContactSocial
          link="https://github.com/armadi04"
          Icon={FiGithub}
          title="Visit My GitHub Account"
        />
        <SingleContactSocial
          link="https://www.instagram.com/medsky.s09?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          Icon={FaInstagram}
          title="Follow Me On Instagram"
        />
      </motion.div>
    </div>
  );
};

export default HeroText;
