import React from "react";
import "./index.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { IoIosPlay } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetAllMusic } from "../../Api/music";
import axios from "axios";
import { Enpoint } from "../../Endpoint";
import { toast } from "wc-toast";

const AlbumComponent = ({ data ,chooseMusic }) => {
  const { id } = useParams();
  const [albumList, setAlbumList] = useState([]);
  const [musicTracks, setMusicTracks] = useState([]);
  
  useEffect(() => {
    getAlbum();
    GetAllMusicComponent();
  }, []);

  const getAlbum = async () => {
    try {
      const res = await axios.get("http://localhost:5000/albums");
      if (res) {
        const newData = res?.data.find((item) => {
          return item._id == id
        });
        setAlbumList(newData);
      }
    } catch (error) {}
  };

  const GetAllMusicComponent = async () => {
    try {
      const res = await GetAllMusic();
      if (res) {
        const data  =  res.filter(e => e.album === albumList.name)
        setMusicTracks(
          data
        );
      }
    } catch (error) {}
  };
  const likeAlbumList = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${Enpoint}like-album/${albumList._id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        if (res.data) {
          return toast.success("Like album success");
        }
        return toast.success("Unlike album success");
      }
    } catch (error) {
      return toast.error("Like faild");
    }
  };

  const listNhac = data.filter( e => e.album === albumList.name)
  console.log('list nhac filter: ', listNhac)



  const playMusic  = (e) =>{
    chooseMusic(e)
  }

  return (
    <div className="postcard-compoent">
      <div className="postcard-component-container">
        <div className="postcard-header">
          <div className="postcard-header-content">
            <h2 className="postcard-header-podcast">Playlist</h2>
            <span>
              <h1 className="postcard-header-podcast-title">
                {albumList.name}
              </h1>
            </span>
            <h2 className="postcard-header-podcast-name">Nhat Duong</h2>
          </div>
        </div>
        <div className="playlistitem-container" style={{ width: "1050px" }}>
          <div className="postcard-container-header">
            {/* <FiMoreHorizontal size={32} /> */}
          </div>
          <div className="playlistitem-container-content">
            <div className="playlistitem-container-content-header">
              <span className="recommended">Recommended</span>
              <span className="base-component">
                Based on the title of this playlist
              </span>
            </div>
            <div className="playlistitem-container">
              <div className="postcard-container-header album-icon">
                <AiFillPlayCircle size={56} />
                <AiFillHeart size={32} onClick={likeAlbumList}/>
                <FiMoreHorizontal size={32} />
              </div>
              <div className="Artists-content">
                <div className="Artists-content-header">
                  
                </div>
                <div className="Artists-content-list">
                  {listNhac.map((e, index) => {
                    return (
                      <div className="Artists-content-item" key={index} onClick={()=> playMusic(e)}>
                        <div className="Artists-content-item-content">
                          <div className="Artists-content-item-img-header border-album">
                            <img
                              src={e.imgSrc}
                              alt=""
                            />
                            <div className="Artists-content-item-after-img">
                              <IoIosPlay size={30} />
                            </div>
                          </div>
                          <div className="Artists-content-item-center">
                            <p>{e.musicName}</p>
                            <span>{e.artist}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumComponent;
