import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "Home",
      section: "home",
    },
    {
      name: "About",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Projects",
      section: "projects",
    },
    {
      name: "Education",
      section: "education",
    },
  ];
  return (
    <div className="flex flex-col text-center items-center justify-center p-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="flex flex-col justify-between mt-4 gap-2 max-w-[1200px] mx-auto pt-5">
        <p className="text-3xl text-lightGrey gap-2">Armadi Nurhidayat</p>
        <ul className="flex gap-6 sm:gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right gap-4 mt-4 mb-4 sm:mt-4 text-sm text-lightBrown max-md:flex max-md:text-center max-md:justify-center max-md:items-center max-md:mt-11">
        © 2025 Armadi04 | All Rights Reserved. Made with in ReactJS ♥️ Tailwind
        CSS
      </p>
    </div>
  );
};

export default FooterMain;
