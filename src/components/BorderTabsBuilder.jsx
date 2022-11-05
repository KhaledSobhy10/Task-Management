import React, { useState } from "react";
import BoardTab from "./BoardTab";
import { useParams } from "react-router-dom";

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
