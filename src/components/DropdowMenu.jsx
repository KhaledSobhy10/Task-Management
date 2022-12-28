import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function DropdownMenu({ options, optionSelectedHandler }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <button
      className="relative w-[40px] text-center z-20 dropdown-btn"
      onClick={() => {
        setShowOptions((prev) => !prev);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-white w-4"
        viewBox="0 0 512 512"
      >
        <circle cx="256" cy="256" r="48" />
        <circle cx="256" cy="416" r="48" />
        <circle cx="256" cy="96" r="48" />
      </svg>
      <AnimatePresence>
        {showOptions && options && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-7 right-5 bg-gray-200 text-black flex flex-col gap-2 shadow p-1 rounded shadow"
          >
            <div className="absolute -top-4 right-1 border-8 border-b-gray-200 border-r-transparent border-l-transparent border-t-transparent"></div>
            {options.map(({ title, extraStyle, selectedHandler }) => (
              <button
                key={title}
                onClick={() => selectedHandler()}
                className={`text-sm  ${extraStyle} w-full hover:bg-gray-300 px-4 py-2`}
              >
                {title}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default DropdownMenu;
