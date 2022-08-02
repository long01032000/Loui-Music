import React, { useState, useEffect } from "react";
import "./index.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosPlay } from "react-icons/io";
import { IoIosMusicalNote } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import { Enpoint } from "../../Endpoint";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { toast } from "wc-toast";



const LibrarySongComponent = ({ data }) => {
  const newData = data.slice(0, 1);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState([]);
  const [listPlay, setListPlay] = useState([]);
  const [likeAlbum, setLikeAlbum] = useState([]);
  console.log(listPlay);

  useEffect(() => {
    getLikeArtist();
    getPlayList();
    getAllAlbum();
  }, []);
  const getLikeArtist = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${Enpoint}get-like-artist`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        setArtist(res.data.listLike);
      }
    } catch (error) {
      return toast.error("Get music failed1");
    }
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

  const getAllAlbum = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${Enpoint}get-like-album`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        setLikeAlbum(res?.data.listLike);
      }
    } catch (error) {
      return toast.error("Get music failed1");
    }
  };
  console.log('like album:' , likeAlbum)

  const createPlayList = async () => {
    try {
      if (!name) return;
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${Enpoint}create-play-list`,
        {
          name: name,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res) {
        setName("");
        setListPlay([...listPlay, res.data]);
      }
    } catch (error) {
      return toast.error("Get music failed1");
    }
  };

  const deletePlayList = async (id)=> {
    const res = axios.delete(`http://localhost:5000/delete-play-list/${id}`);
    if (res) {
      toast.success("delete play list success");
      const newData =  listPlay.filter(e => e._id !== id)
      setListPlay(newData)
    }}
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Playlists</Tab>
          <Tab>Artists</Tab>
          <Tab>Albums</Tab>
        </TabList>
        <TabPanel>
          <div className="playlist">
            <div className="playlist-header">
              <h2>Playlists</h2>
              <div className="Playlist-contents">
                <span>Create playlist</span>
                <div className="createPlaylist">
                  <input
                    placeholder="Enter playlist name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="ikon"><AiOutlinePlus onClick={() => createPlayList()} /></div>
                </div>
              </div>
            </div>
            <div className="library-listPlay">
              {listPlay.map((e, index) => {
                return (
                  <div className="playlist-container">
                    <AiOutlineClose style={{color: "white"}} onClick={()=>{
                        var answer = window.confirm("You sure you wanna delete playList??");
                        if (answer) {
                            deletePlayList(e?._id)
                        }
                    }}/>
                    <Link to={`/play-list/${e._id}`} style={{ textDecoration: "none" }} key={index}>
                      <div className="playlist-img">
                        <div className="imgx">
                          <div>
                            <div className="img-content">
                              <IoIosMusicalNote size={64} color={'gray'}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="playlist-container-content">                        
                        <h1>{e.name}</h1>
                        <div>
                          <span>By me</span>
                          <div className="buttonPlay">
                            <IoIosPlay size={30} color={"black"} />
                          </div>
                        </div>
                      </div>
                    </Link>
                    </div>
                );
              })}
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="podcart-container">
            <div className="Artists-content">
              <div className="Artists-content-header">
                <h3>Artists</h3>
              </div>
              <div className="Artists-content-list">
                {artist.map((e, index) => {
                  return (
                    <Link to={`/artist/${e._id}`} key={index}>
                      <div className="Artists-content-item">
                        <div className="Artists-content-item-content">
                          <div className="Artists-content-item-img-header">
                            <img src={e.image} alt="" />
                            <div className="Artists-content-item-after-img">
                              <IoIosPlay size={30} />
                            </div>
                          </div>
                          <div className="Artists-content-item-center">
                            <p>{e.name}</p>
                            <span>Artist</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="podcart-container">
            <div className="Artists-content">
              <div className="Artists-content-header">
                <h3>Albums</h3>
              </div>
              <div className="Artists-content-list">
                {likeAlbum.map((e, index) => {
                  return (
                    <Link to={`/album/${e._id}`} key={index}>
                      <div className="Artists-content-item">
                        <div className="Artists-content-item-content">
                          <div className="Artists-content-item-img-header albums">
                            <img
                              src={e.image}
                              alt=""
                            />
                            <div className="Artists-content-item-after-img">
                              <IoIosPlay size={30} />
                            </div>
                          </div>
                          <div className="Artists-content-item-center">
                            <p>{e.name}</p>
                            <span>Album</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default LibrarySongComponent;
