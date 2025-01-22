"use client";

import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useLocalStorage } from "usehooks-ts";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const [enabled, setEnabled] = useState(theme == "light");

  const handleThemeChange = (enabled: boolean) => {
    setTheme(enabled ? "light" : "dark");
    setEnabled(enabled);
  };

  return (
    <>
      <label htmlFor="themeToggle" className="hidden">
        Theme toggle Dark Mode/Light Mode
      </label>
      <Switch
        id="themeToggle"
        checked={enabled}
        onChange={handleThemeChange}
        title="Toggle theme"
        className={classNames(
          "relative bg-greenFav inline-flex h-6 w-11 sm:h-9 sm:w-16 xl:h-6 xl:w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
        )}
      >
        <span
          className={classNames(
            enabled
              ? "translate-x-5 lg:translate-x-7 xl:translate-x-5"
              : "translate-x-0",
            "pointer-events-none relative inline-block h-5 w-5 md:h-8 md:w-8 xl:h-5 xl:w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        >
          <span
            className={classNames(
              enabled
                ? "opacity-0 duration-100 ease-out"
                : "opacity-100 duration-200 ease-in",
              "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <FontAwesomeIcon
              icon={faMoon}
              className="w-3 h-3 sm:w-6 sm:h-6 xl:w-3 xl:h-3 text-black"
            />
          </span>
          <span
            className={classNames(
              enabled
                ? "opacity-100 duration-200 ease-in"
                : "opacity-0 duration-100 ease-out",
              "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <FontAwesomeIcon
              icon={faSun}
              className="w-3 h-3 sm:w-6 sm:h-6 xl:w-3 xl:h-3 text-yellow-600"
            />
          </span>
        </span>
      </Switch>
    </>
  );
};

export default ThemeToggle;
