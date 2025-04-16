import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <section id="home" className=" mt-10 pt-40 pb-20">
      <div className="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </section>
  );
};

export default HeroMain;
