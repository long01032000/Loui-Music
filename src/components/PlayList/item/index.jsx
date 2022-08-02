import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import "./index.css";
const Item = ({ data }) => {
  return (
    <div className="play-list-item">
      <div className="playlist-item-image">
        <img src={data?.img} />
      </div>
      <div className="playlist-song-contanier">
        <div className="playlist-item-content">
          <div className="song-name-item">
            <h6>{data?.title}</h6>
            <span>{data?.actor}</span>
          </div>
          <div className="song-name-icon">
            <AiFillPlayCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
