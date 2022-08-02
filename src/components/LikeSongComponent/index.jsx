import React from "react";
import "./index.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
const LikeSongComponent = ({ data ,chooseMusic, title}) => {
  const playMusic = (e) =>{
    chooseMusic(e)
  }
  return (
    <div className="likesong-component">
      <div className="likesong-header">
        <div className="likesong-header-left">
          <img src="https://www.linkpicture.com/q/Capture_321.png" />
        </div>
        <div className="likesong-header-right">
          <h2>Playlist</h2>
          <span>
            <h1>{title || 'Liked Songs'}</h1>
          </span>
          <div className="likesong-content">
            <div className="likesong-avatar">
              <div className="likesong-avatar-img">
                <img src="https://www.linkpicture.com/q/Capture_321.png" />
              </div>
              <span>Hoanglogg</span>.
              <span>{data.length} song</span>
            </div>
          </div>
        </div>
      </div>
      <div className="likesong-contaniner">
        <div className="likesong-container-header">
          <div className="likesong-container-icon">
            <BsFillPlayCircleFill color="#ffffff" size={56} />
          </div>
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
            </tr>
          </thead>
          <tbody>
            {data.map((e, index) => {
              return (
                <tr key={index} onClick={() => playMusic(e)}>
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LikeSongComponent;
