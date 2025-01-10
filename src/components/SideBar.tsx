"use client";

import ThemeToggle from "./ThemeToggle";
import Photo from "../assets/me.jpg";
import { getFormattedLocalTime } from "../utils/dateTime";

const SideBar = () => {
  return (
    <div className="bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg text-black dark:text-white w-1/5">
      <div className="flex justify-between items-center gap-8 p-4">
        <div>
          <h1 className="text-2xl font-bold">Marcelo Esparza</h1>
          <h2 className="text-gray-500 dark:text-gray-400">
            Software Engineer
          </h2>
        </div>
        <ThemeToggle />
      </div>
      <div>
        <img src={Photo} alt="Marcelo Esparza" className="w-full" />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <span>TMRW Life Sciences</span>
        <span>Remote</span>
        <span>{getFormattedLocalTime()}</span>
        <span>
          <a href="mailto:maresparzam@gmail.com">maresparzam@gmail.com</a>
        </span>
      </div>
    </div>
  );
};

export default SideBar;
