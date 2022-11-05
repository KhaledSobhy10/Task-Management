import React, { useEffect } from "react";
import Statistics from "../components/Statistics";
import StatisticActionBar from "../components/StatisticActionBar";

function Home({ showSideBarHandler, setCurrentBoardName }) {
  useEffect(() => {
    showSideBarHandler(true);
    setCurrentBoardName(undefined);
  }, []);
  return (
    <div className="h-[calc(100vh-50px)] w-full dark:text-white font-bold  flex justify-center items-center">
      <span className="animate-bounce	">Select / Create board</span>
    </div>
  );
}

export default Home;
