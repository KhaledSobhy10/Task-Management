import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

export default function AccMenu({ options }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="w-4 dark:fill-white ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <circle cx="256" cy="256" r="48" />
            <circle cx="256" cy="416" r="48" />
            <circle cx="256" cy="96" r="48" />
          </svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-1">
          {options.map(({ title, extraStyle, selectedHandler }) => (
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-[#6166ca] text-white" : `${extraStyle}`
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm `}
                  onClick={selectedHandler}
                >
                  {title}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
