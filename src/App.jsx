import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActionBar from "./components/ActionBar";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Boards from "./pages/Boards";

import BoardsContextProvider from "./context/BoardsContext";

function App() {
  const [currentBoardName, setCurrentBoardName] = useState();
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <BrowserRouter>
      <BoardsContextProvider>
        <div className="relative w-screen  bg-white dark:bg-[#1b1c29] transition-colors  duration-300 ">
          <ActionBar
            boardName={currentBoardName}
            showSideBarHandler={setShowSideBar}
          />
          <SideBar
            showBar={showSideBar}
            showSideBarHandler={setShowSideBar}
            currentBoardName={currentBoardName}
          />
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    showSideBarHandler={setShowSideBar}
                    setCurrentBoardName={setCurrentBoardName}
                  />
                }
              ></Route>
              <Route
                path="/boards/:boardName"
                element={
                  <Boards
                    currentBoardNameHandler={setCurrentBoardName}
                    showSideBarHandler={setShowSideBar}
                  />
                }
              ></Route>
            </Routes>
          </div>
        </div>
      </BoardsContextProvider>
    </BrowserRouter>
  );
}

export default App;
