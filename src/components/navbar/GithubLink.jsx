import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

function GitHubLink() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-center space-x-2">
      {/* GitHub Icon & Name */}
      <a
        href="https://github.com/armadi04"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaGithub className="text-4xl" />
        <span className="font-semibold text-2xl md:block">armadi04</span>
      </a>

      {/* Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="absolute left-[-16px] top-14 -translate-x-1/2 whitespace-nowrap rounded-md bg-Black hover:border-darkGrey py-1 px-2 text-sm text-white font-semibold shadow-lg"
        >
          Visit my GitHub Account
        </motion.div>
      )}
    </div>
  );
}

export default GitHubLink;
//hover:border-darkGrey rounded-md bg-black py-1 text-sm text-white
