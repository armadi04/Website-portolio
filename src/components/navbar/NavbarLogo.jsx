import GitHubLink from "./GithubLink";

const NavbarLogo = () => {
  return (
    <div>
      <h1 className="text-white text-xl sm:hidden md:block ml-4 px-4 py-2 rounded-full font-bold font-body flex items-center gap-1 transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer">
        <GitHubLink />
      </h1>
      <h1 className="text-white font-special font-extrabold text-2xl md:hidden sm:block rounded-2xl flex items-center gap-2 px-2 transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer sm:ml-4">
        <GitHubLink />
      </h1>
    </div>
  );
};

export default NavbarLogo;
