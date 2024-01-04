import React from "react";
import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";

const ListItem = ({ task }) => {
  return (
    <div className="list-item">

      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar />
      </div>
      <div className="button-container">
      </div>
      <button className="edit">EDIT</button>
      <button className="delete">DELETE</button>
    </div>
  );
};

export default ListItem;
