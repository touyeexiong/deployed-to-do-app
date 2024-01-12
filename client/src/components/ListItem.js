import { useState } from "react";
import React from "react";
import TickIcon from "./TickIcon";
import Modal from "./Modal";
import ProgressBar from "./ProgressBar";

const ListItem = ({ task }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar />
      </div>
      <div className="button-container">
        <button className="edit" onClick={() => setShowModal(true)}>EDIT</button>
        <button className="delete">DELETE</button>
      </div>
      {showModal && <Modal mode={'edit'} setShowModal={setShowModal} task={task} />}
    </li>
  );
};

export default ListItem;
