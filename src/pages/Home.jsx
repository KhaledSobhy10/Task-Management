import { useEffect } from "react";

function Home({ showSideBarHandler, setCurrentBoardName, showSideBar }) {
  useEffect(() => {
    showSideBarHandler(true);
    setCurrentBoardName(undefined);
  }, []);
  return (
    <div
      className={`h-[calc(100vh-50px)] ${
        showSideBar ? "w-[calc(100vw-350px)]" : "w-screen"
      }  dark:text-white font-bold  flex justify-center items-center`}
    >
      <span className="animate-bounce	">Select / Create board</span>
    </div>
  );
}

export default Home;
