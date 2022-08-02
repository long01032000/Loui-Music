import React from "react";
import "./index.css";
import {GetUser} from "../../../Api/user"
import { GetAllMusic } from "../../../Api/music";
import { BsMusicNote } from "react-icons/bs";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const ListActive = ({ data }) => {
  const [userData, setUserData] = useState([]);

  const [musicData, setMusicData] = useState([]);


  useEffect(() => {
    getUserData();
    getMusicData();
  }, []);

  const getUserData = async () =>{
    try {
      const res = await GetUser();
      if(res == false) return;
      setUserData(res);
    } catch (error){}
  };

  const getMusicData = async () =>{
    try {
      const res = await GetAllMusic();
      if(res == false) return;
      setMusicData(res);
    } catch (error){}
  };
  // console.log(data)
  return (
    <div className="listactive-component">
      <div className="listactive-componet-center">
        <div className="listactive-componet-center-header">
          <div className="listactive-componet-center-img">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRE9h25i_UZRTUU3-xOdGlTLoZaoKMw6uegg&usqp=CAU"} />
          </div>
          <div className="listactive-componet-center-content">
            <h4>{data?.email}</h4>
            <span>Created online music room</span>
          </div>
        </div>
        <div className="listactove-component-content">
          <Link to={`/chat-music/${data?._id}`}>
            <div className="listactove-component-content-center">
              <div className="icon-room">
                <BsMusicNote />
              </div>
              <div className="content-room-name">
                <h4>{data?.roomName}</h4>
                <span>Listening to {musicData?.musicName}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListActive;
