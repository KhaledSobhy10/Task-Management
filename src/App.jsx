import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActionBar from "./components/ActionBar";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Boards from "./pages/Boards";

import BoardsContextProvider from "./context/BoardsContext";
import { Transition } from "@headlessui/react";

function App() {
  const [currentBoardName, setCurrentBoardName] = useState();
  const [showSideBar, setShowSideBar] = useState(false);
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <BrowserRouter>
      <BoardsContextProvider>
        <div className="relative  w-screen  bg-white dark:bg-[#1b1c29] transition-colors  duration-300 ">
          <ActionBar
            boardName={currentBoardName}
            showSideBarHandler={setShowSideBar}
          />
          <div className="flex w-full overflow-hidden">
            <Transition
              show={showSideBar}
              enter="transition-margin duration-100 ease-out"
              enterFrom="-ml-80"
              enterTo="ml-0"
              leave="transition-margin duration-100 ease-out"
              leaveFrom="ml-0"
              leaveTo="-ml-80"
            >
              <SideBar
                showBar={showSideBar}
                showSideBarHandler={setShowSideBar}
                currentBoardName={currentBoardName}
              />
            </Transition>
            <div>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      showSideBarHandler={setShowSideBar}
                      setCurrentBoardName={setCurrentBoardName}
                      showSideBar={showSideBar}
                    />
                  }
                ></Route>
                <Route
                  path="/boards/:boardName"
                  element={
                    <Boards
                      currentBoardNameHandler={setCurrentBoardName}
                      showSideBarHandler={setShowSideBar}
                      showSideBar={showSideBar}
                    />
                  }
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BoardsContextProvider>
    </BrowserRouter>
  );
}

export default App;
