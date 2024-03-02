import React from "react";
import BoardTab from "./BoardTab";

function BorderTabsBuilder({ tabsTitles, currentBoardName }) {
  return tabsTitles.map((title, index) => (
    <BoardTab
      key={title + index}
      title={title}
      index={index}
      selected={currentBoardName === title}
    />
  ));
}

export default BorderTabsBuilder;
