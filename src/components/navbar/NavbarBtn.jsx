import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="mr-2 px-3 py-2 rounded-full text-lg sm:text-base font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow sm:mr-4">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
