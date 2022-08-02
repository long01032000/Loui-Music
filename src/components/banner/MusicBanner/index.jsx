import React from "react";
import "./index.css";
import { BsSuitHeartFill } from 'react-icons/bs'
import { BsSoundwave } from 'react-icons/bs'
import {toast} from 'wc-toast'
import axios from 'axios'
import {Enpoint} from '../../../Endpoint.js'
import { Link } from "react-router-dom";
const MusicBanner = ({ data }) => {
  const likeArtist = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${Enpoint}like-artist/${data._id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        if (res.data) {
          return toast.success("Like artist success");
        }
        return toast.success("Unlike artist success");
      }
    } catch (error) {
      return toast.error("Like faild");
    }
  };
  return (
    <Link to = {`/artist/${data?._id}`} >
      <div className="musicbanner-component" >
        {/* <button onClick = {()=>{getOneArtist(data._id)}}>get artist</button> */}
        <div className="musicbanner-img">
          <img src={data?.image} alt="" />
        </div>
        <div className="musicbanner-content">
            <div className="musicbanner-title">
              {data?.name}
            </div>
            <div className="musicbanner-infor">
              <span><BsSuitHeartFill /> {data?.follower} follower . <BsSoundwave /> {data?.listen}M Plays</span>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default MusicBanner;
