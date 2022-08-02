import React from "react";
import "./index.css";
import { IoLogInOutline } from "react-icons/io5";
import { IoMdMusicalNote } from "react-icons/io";
const TalkRoom = () => {
  return (
      <div className="talk-room-component">
        <div className="talk-room-main">
          <div className="talk-room-icon">
            <IoMdMusicalNote />
          </div>
          <span>Music room name</span>
        </div>

        <div className="talk-room-btn">
          <IoLogInOutline /> <span>Leave room</span>
        </div>
      </div>
  );
};

export default TalkRoom;
