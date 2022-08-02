import React, { useState } from "react";
import "./index.css";
import AudioPlayer from "react-h5-audio-player";
import { AiFillDelete, AiFillHeart, AiOutlineArrowLeft } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { GetAllMusic } from "../../Api/music";
import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

const SliderChatMusicComponent = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const navigate  = useNavigate()
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState([]);


  const [musicTracks, setMusicTracks] = useState([
    
  ]);

  useEffect(() => {
    getAllMusicComponent();
  }, []);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = musicTracks.filter((user) => {
        return user.musicName.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(musicTracks);
    }

    setName(keyword);
  };

  const getAllMusicComponent = async () => {
    try {
      const res = await GetAllMusic();
      if (res === false) return;
      setMusicTracks(res);
      setFoundUsers(res);
    } catch (error) {}
  };
  
  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };
  const playMusic = (e)  =>{
    setTrackIndex(e)
  }
  const removeItem = (id) =>{
    const newData  = musicTracks.filter(e => e._id !== id)
    setFoundUsers(newData)
    setMusicTracks(newData)
  }
  return (
    <div className="slider-component">
      <div className="">
        <div className="slider-header">
        <h4>{musicTracks[trackIndex]?.musicName}</h4>
        <div className="slider-header-icon" onClick={() => navigate('/listRoom')}>
          <span> <AiOutlineArrowLeft /> Leave Room</span>
        </div>
        </div>
        <div className="">
          <div className="img-slider">
            <img src={musicTracks[trackIndex]?.imgSrc} alt="" />
          </div>
        </div>

        <AudioPlayer
          className="audio-play"
          autoPlay
          src={musicTracks[trackIndex]?.music}
          onPlay={(e) => console.log("onPlay")}
          showSkipControls={true}
          showJumpControls={false}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
        />
      </div>
      <div>
      <input
        type="search"
        onChange={(e) => filter(e)}
        className="input"
        placeholder="Filter"
      />
      </div>
      <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">album</th>
              <th scope="col">date added</th>
              <th scope="col">
                <BiTime />
              </th>
              <th scope="col">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {foundUsers.map((e, index) => {
              return (
                <tr key={index} onClick={() => playMusic(index)}>
                  <th scope="row" className="span-to-view">
                    {index + 1}
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
                      <div className="title-abum-name">
                        {e.musicName}
                      </div>
                      <span className="span-to-view">
                        {e.artist}
                      </span>
                    </div>
                  </td>
                  <td scope="row">
                    <div className="">
                      <a className="span-to-view">
                        {e.musicName}
                      </a>
                    </div>
                  </td>
                  <td scope="row">
                    <div className="timess" style={{marginTop: '2px'}}>
                      <a className="span-to-view">Jun 17, 2021</a>
                    </div>
                  </td>
                  <td scope="row">
                    <div className="span-to-view gap-to-view">
                      <AiFillHeart height={'1.2em!important'}/>
                      <div>3:05</div>
                    </div>
                  </td>
                  <td scope="row">
                    <div className="span-to-view gap-to-view">
                      <AiFillDelete onClick={() => removeItem(e._id)} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  );
};

export default SliderChatMusicComponent;
