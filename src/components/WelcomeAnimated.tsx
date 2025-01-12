const WelcomeAnimated = () => {
  return (
    <div className="absolute flex text-3xl font-bold text-black dark:text-white top-6 left-[420px]">
      <span className="text-green-700 dark:text-greenFav tracking-widest">
        {"<"}
      </span>
      <span className="pr-4 tracking-widest">Hey!</span>
      <span className="animate-typing font-mono overflow-hidden border-r-2 border-greenFav whitespace-nowrap tracking-widest">
        Welcome to my website
        <span className="text-green-700 dark:text-greenFav pl-3">{"/>"}</span>
      </span>
    </div>
  );
};

export default WelcomeAnimated;
