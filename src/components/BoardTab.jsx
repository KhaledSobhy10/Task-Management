import React from "react";
import { Link } from "react-router-dom";

function BoardTab({ title, selected }) {
  return (
    <Link
      to={`boards/${title}`}
      className={`capitalize w-64 text-start px-4 py-2 rounded-l-lg rounded-full ${
        selected ? "text-white  bg-[#6166ca]" : "dark:text-gray-500"
      } text-sm flex gap-1`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-5"
      >
        <rect
          x="96"
          y="48"
          width="320"
          height="416"
          rx="48"
          ry="48"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="60"
          d="M320 48v416"
        />
      </svg>
      {title}
    </Link>
  );
}

export default BoardTab;
