import React from "react";
import { AiFillHeart, AiFillPlayCircle } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoIosPlay } from "react-icons/io";
import { BiTime } from "react-icons/bi";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GetAllMusic } from "../../Api/music";
import { Enpoint } from "../../Endpoint";
import { toast } from "wc-toast";
const ArtistComponent = ({data,chooseMusic}) => {
  const { id } = useParams();
  const [artistList, setArtistList] = useState([]);
  const [musicTracks, setMusicTracks] = useState([]);
  const listNhac = data.filter( e => e.artist === artistList.name)
  console.log(listNhac)

  useEffect(() => {
      getArtist();

    GetAllMusicComponent();
  }, []);
  const playMusic =(item) =>{
    chooseMusic(item)
  }

  //load artist data
  const getArtist = async () => {
    try {
      const res = await axios.get("http://localhost:5000/artists");

      if (res) {
        const data = res?.data.find((item) => {
          return item._id == id;
        });
        setArtistList(data);
      }
    } catch (error) {}
  };

  const GetAllMusicComponent = async () => {
    getArtist();
    try {
      const res = await GetAllMusic();
      if (res) {
        const data  =  res.filter(e => e.artist === artistList.name)
        setMusicTracks(
          data
        );
      }
    } catch (error) {}
  };

  const filterAlbum = musicTracks.find((item) => {
    return item.artist == artistList.name;
  });
console.log('Artist music ==================', musicTracks)
const likeArtist = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${Enpoint}like-artist/${artistList._id}`, {
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
    <div className="postcard-compoent">
      <div className="postcard-component-container">
        <div className="postcard-header">
          <div className="postcard-header-img playlistitem border-album-1">
            <img src={artistList.image} alt="" />
          </div>
          <div className="postcard-header-content">
            <h2 className="postcard-header-podcast">Single</h2>
            <span>
              <h1 className="postcard-header-podcast-title">
                {artistList.name}
              </h1>
            </span>
            <h2 className="postcard-header-podcast-name">
              {listNhac.length} song
            </h2>
          </div>
        </div>
        <div className="playlistitem-container" style={{ width: "1050px" }}>
          <div className="postcard-container-header album-icon">
            <AiFillPlayCircle size={56} />
            <AiFillHeart size={32}  onClick={likeArtist}/>
            <FiMoreHorizontal size={32} />
          </div>
          <div className="Artists-content">
            <div className="Artists-content-header">
              <h3>More by {artistList.name}</h3>
            </div>
         
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">title</th>
                  <th scope="col">album</th>
                  <th scope="col">date added</th>
                  <th scope="col">
                    <div className="ikon" style={{ marginLeft: "5px" }}>
                      <BiTime />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {listNhac.map((e, index) => {
                  return (
                    <tr key={index} onClick={() => playMusic(e)}>
                      <th scope="row" className="span-to-view">
                        <div className="index" style={{ marginTop: "15px" }}>
                          {index + 1}
                        </div>
                      </th>
                      <td className="row-img" scope="row ">
                        <img
                          aria-hidden="false"
                          draggable="false"
                          loading="eager"
                          src={e.imgSrc}
                          alt=""
                        />
                        <div className="title-abum">
                          <div className="title-abum-name">{e.musicName}</div>
                          <span className="span-to-view">{e.artist}</span>
                        </div>
                      </td>
                      <td scope="row">
                        <div className="align">
                          <a className="span-to-view">{e.album}</a>
                        </div>
                      </td>
                      <td scope="row">
                        <div className="align">
                          <a className="span-to-view">Jun 17, 2021</a>
                        </div>
                      </td>
                      <td scope="row">
                        <div className="span-to-view gap-to-view">
                          <div className="time">3:05</div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="Artists-content-header">
              <h3>Album of {artistList.name}</h3>
            </div>
           
              <div className="Artists-content-list">
                <div className="Artists-content-item">
                  <div className="Artists-content-item-content">
                    <div className="Artists-content-item-img-header border-album">
                      <img src={listNhac[0]?.imgSrc} alt="" />
                      <div className="Artists-content-item-after-img">
                        <IoIosPlay size={30} />
                      </div>
                    </div>
                    <div className="Artists-content-item-center">
                      <p>{listNhac[0]?.album}</p>
                      <span>{artistList.name}</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistComponent;
