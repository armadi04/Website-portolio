import SingleContactSocial from "./SingleContactSocial";
import { FaYoutube } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGithub, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://youtube.com/@football_story09?si=5tQy4PPFl5Hlk0-i"
        Icon={FaYoutube}
        title="Subscribe Now!"
      />
      <SingleContactSocial
        link="https://github.com/armadi04"
        Icon={FiGithub}
        title="Visit My Github"
      />
      <SingleContactSocial
        link="https://www.instagram.com/medsky.s09?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        Icon={FaInstagram}
        title="Follow Me on Instagram"
      />
    </div>
  );
};

export default ContactSocial;

// text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-1 transition-all duration-300 ease-in-out

{
  /* <div className="flex gap-4">
      <a
        href="https://github.com/armadi04"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoGithub className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out"></BiLogoGithub>
      </a>
      <a
        href="https://www.instagram.com/medsky.s09?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoInstagram className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-blue-500 hover:rotate-12 transition-all duration-300 ease-in-out"></BiLogoInstagram>
      </a>
      <a
        href="https://youtube.com/@football_story09?si=5tQy4PPFl5Hlk0-i"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoYoutube className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-red-500 hover:rotate-12 transition-all duration-300 ease-in-out"></BiLogoYoutube>
      </a>
    </div> */
}
