import React, { useState } from "react";

function ModalContainer({ children, setShoModal }) {
  return (
    <div
      className={`absolute top-0 left-0 h-full w-full  flex justify-center items-center z-40 bg-black/75`}
      onClick={(e) => {
        e.stopPropagation();
        setShoModal((prev) => !prev);
      }}
    >
      {children}
    </div>
  );
}

export default ModalContainer;
