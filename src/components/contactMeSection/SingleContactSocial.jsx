const SingleContactSocial = ({ Icon, link, title }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center relative group">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer transition-transform duration-300 hover:scale-125 hover:rotate-12"
        title={title}
      >
        <Icon />
      </a>
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 rounded-md bg-Black hover:border-darkGrey py-1 px-2 text-sm text-white font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {title}
      </div>
    </div>
  );
};

export default SingleContactSocial;
