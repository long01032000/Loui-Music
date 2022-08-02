import axios from "axios";
import React, { useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { toast } from "wc-toast";
import { URL } from "../../../../pages/helper";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import "./index.css";
import { Enpoint } from "../../../../Endpoint";
import { useEffect } from "react";
const CustomeItem = ({ data, id, isLikeMusic, getMusic }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [playList, setListPlay] = useState([]);
  useEffect(() => {
    getPlayList();
  }, []);
  const likeMusic = async (e) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${URL}like-music/${data._id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        isLikeMusic(e);
        if (res.data) {
          return toast.success("Like music success");
        }
        return toast.success("Unlike music success");
      }
    } catch (error) {
      return toast.error("Get music failed1");
    }
  };
  const getData = () => {
    getMusic(data);
  };
  const getPlayList = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${Enpoint}list-play`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        setListPlay(res.data);
      }
    } catch (error) {
      return toast.error("Get music failed1");
    }
  };
  const addToAlbum = async (playID, musicID) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${Enpoint}addPlayList/${playID}/${musicID}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data === true) {
        setIsOpen(!isOpen)
        return toast.success("Add play list success");
      }
      setIsOpen(!isOpen)
      return toast.error("Music already in the play list");
    } catch (error) {
      return toast.error("Get music failed1");
    }
  };
  return (
    <div className="customeitem-container">
      <div className="custome-item-container-main">
        <span>{id + 1}</span>
        <img src={data?.imgSrc} alt="" />
        <div className="custome-item-title">
          <div
            className="custome-item-title-header"
            onClick={() => getData()}
            style={{ cursor: "pointer" }}
          >
            <span>{data?.musicName}</span>
          </div>
          <div className="custome-item-content">
            <span>
              <BsFillPersonFill /> {data?.artist}
            </span>
          </div>
        </div>
        <div onClick={() => likeMusic(data)}>
          {data.isLike ? (
            <>
              <AiFillHeart />
            </>
          ) : (
            <>
              <AiOutlineHeart />
            </>
          )}
        </div>
        <span>{data?.time}</span>
        <BsFillPlayCircleFill />
        <div>
          <BsThreeDotsVertical onClick={() => setIsOpen(!isOpen)} />
          <div className="poup" style={{ display: isOpen ? "block" : "none" }}>
            <div className="title text-center">Add to Playlist</div>
            {playList.map((e, index) => {
              return (
                <div className="item" key={index} onClick={() => addToAlbum(e._id, data._id)}>
                  <AiOutlinePlusCircle />
                  <span>{e.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomeItem;
