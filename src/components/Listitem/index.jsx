import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ActiveNow from "../ActiveNow";
import Toplist from "../Toplist";
import "./index.css";
import Item from "./item";
import Custome from "./TrendingCustome";
import axios from "axios";
import { Enpoint } from "../../Endpoint";
import { toast } from "wc-toast";

const Listitem = ({ isToplist, data ,chooseMusic,isLikeMusic}) => {
  const [album, setAlbum] = useState([])

  useEffect(()=>{
    getAllAlbum()
  }, [])

  const getAllAlbum = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${Enpoint}albums`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        setAlbum(res?.data);
      }
    } catch (error) {
      return toast.error("Get music failed1");
    }
  };

  const getMuisc = (e)  =>{
    chooseMusic(e)
  }
  const setMusic =(e) =>{
    isLikeMusic(e)
  }
  return (
    <div className="listitem-component">
      <div className="listitem-center">
        <div className="listitem-component-container">
          <div className="listitem-header">
            <h1>Hot Playlists</h1>
            <Link to='/list-album'><span>See more</span></Link>
            
          </div>
          <div className="listitem-content">
            {album.map((e, index) => {
              return <Item key={index} data={e} />;
            })}
          </div>
        </div>
        <Custome data={data} chooseMusic={getMuisc} isLikeMusic={setMusic}/>
      </div>
      <div className="test">{isToplist ? <Toplist /> : <ActiveNow />}</div>
    </div>
  );
};

export default Listitem;
