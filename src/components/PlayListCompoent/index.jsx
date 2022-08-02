import React from "react";
import "./index.css";
import { FiMoreHorizontal, FiMusic } from "react-icons/fi";
const PlayListCompoent = () => {
  return (
    <div className="postcard-compoent">
      <div className="postcard-component-container">
        <div className="postcard-header">
          <div className="postcard-header-img playlistitem">
            <FiMusic size={80} />
          </div>
          <div className="postcard-header-content">
            <h2 className="postcard-header-podcast">Playlist</h2>
            <span>
              <h1 className="postcard-header-podcast-title">My Playlist #4</h1>
            </span>
            <h2 className="postcard-header-podcast-name">Thanh Danh</h2>
          </div>
        </div>
        <div className="playlistitem-container">
          <div className="postcard-container-header">
            <FiMoreHorizontal size={32} />
          </div>
          <div className="playlistitem-container-content">
            <div className="playlistitem-container-content-header">
              <span className="recommended">Recommended</span>
              <span className="base-component">
                Based on the title of this playlist
              </span>
            </div>
            <div className="playlistitem-container-content-content">
              <div className="playlistitem-container-content-list">
                <div className="playlistitem-container-content-item">
                  <div className="playlistitem-container-content-item-1">
                    <div className="playlistitem-container-content-item-img">
                      <img
                        src="https://i.scdn.co/image/ab67616d00001e02041318697b3bb955cfb3b35e"
                        alt=""
                      />
                    </div>
                    <div className="playlistitem-container-content-item-img-content">
                      <span className="top-playitem">TOP MODEL</span>
                      <span className="name-playitem">Kelo the Artist Defender the artist</span>
                    </div>
                  </div>
                  <div className="playlistitem-container-content-item-2">
                    <span>TOP MODEL</span>
                  </div>
                  <div className="playlistitem-container-content-item-3">
                    <button>Add</button>
                  </div>
                </div>
                <div className="playlistitem-container-content-item">
                  <div className="playlistitem-container-content-item-1">
                    <div className="playlistitem-container-content-item-img">
                      <img
                        src="https://i.scdn.co/image/ab67616d00001e02041318697b3bb955cfb3b35e"
                        alt=""
                      />
                    </div>
                    <div className="playlistitem-container-content-item-img-content">
                      <span className="top-playitem">TOP MODEL</span>
                      <span className="name-playitem">Kelo the Artist Defender the artist</span>
                    </div>
                  </div>
                  <div className="playlistitem-container-content-item-2">
                    <span>TOP MODEL</span>
                  </div>
                  <div className="playlistitem-container-content-item-3">
                    <button>Add</button>
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

export default PlayListCompoent;
