import React, { useState } from "react";

function ThemeToggle({ toggleOn }) {
  const [darkTheme, setDarkTheme] = useState((toggleOn = true));

  const toggleClickHandler = () => {
    setDarkTheme((prev) => {
      if (!darkTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return !prev;
    });
  };

  return (
    <div className="mx-auto p-2 w-80 dark:bg-[#1b1c29] flex justify-center items-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-[24px] h-[24px]"
      >
        <title>Moon</title>
        <path
          d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>

      <div
        className={`relative mx-4 dark:bg-[#6166ca] bg-gray-400 rounded-full w-[50px] h-[22px] cursor-pointer transition-colors  duration-300`}
        onClick={toggleClickHandler}
      >
        <div
          className={`absolute 	 transition-transform	 duration-300	 
        dark:translate-x-[30px] translate-x-[5px]
       top-[3px] rounded-full bg-white w-[15px] h-[15px]`}
        ></div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-[24px] h-[24px]"
      >
        <title>Sunny</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
        />
        <circle
          cx="256"
          cy="256"
          r="80"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    </div>
  );
}

export default ThemeToggle;
