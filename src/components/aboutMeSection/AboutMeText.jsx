import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="w-full md:w-[600px] h-auto gap-4 flex flex-col items-center text-center md:items-start md:text-left md:ml-8">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-xl mb-2">
        My name is Armadi, I love learning various frameworks. I am currently
        learning React and front-end development. I am also very enthusiastic
        about learning to become a full stack web developer. Outside of coding,
        I love to continuously learn and share my knowledge to inspire others to
        achieve their goals.
      </p>
      <p className="text-xl mt-2">
        I'm a passionate Frontend Web Developer with a focus on creating
        elegant, high-performance web applications. My journey in software
        development began with a curiosity about how digital experiences are
        built, and has evolved into a professional pursuit of creating software
        that makes a difference..
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
