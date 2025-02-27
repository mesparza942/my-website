const WelcomeAnimated = () => {
  return (
    <div className="absolute flex flex-nowrap sm:flex-nowrap text-md md:text-3xl font-bold text-black dark:text-white md:left-[80px] lg:left-[200px] pl-8 top-3 md:top-6 xl:left-[400px]">
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
