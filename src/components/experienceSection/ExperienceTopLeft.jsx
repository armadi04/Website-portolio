import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2025
      </p>
      <div className="flex justify-center items-center py-4 gap-5">
        <ExperienceInfo number="4+" text="Months" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="6" text="Projects" />
      </div>
      <p className="text-center">
        With 4+ months of experience building dynamic and user-friendly web
        applications.
      </p>
      {/* <ExperienceInfo number="Rp100k" text="Max Budget" /> */}
    </div>
  );
};

export default ExperienceTopLeft;
