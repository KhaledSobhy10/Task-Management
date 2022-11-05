import React from "react";

function StatisticActionBar({ showSideBarHandler }) {
  return (
    <div className="transition-colors  duration-300 min-w-fit w-full h-[50px]  sm:px-4 px-2 py-2 bg-white dark:bg-[#272835] dark:text-white text-black flex gap-4 items-center shadow">
      <>
        <button
          className="flex justify-center items-center p-2 "
          onClick={() => {
            showSideBarHandler((prev) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={`stroke-[#6166ca] w-8  transition-transform`}
          >
            <path
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="48"
              d="M88 152h336M88 256h336M88 360h336"
            />
          </svg>
        </button>
      </>
      <h2 className="flex-1 font-bold text-xl capitalize ">Statistics</h2>
    </div>
  );
}

export default StatisticActionBar;
