import React from "react";
import "./index.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
const PostCardComponent = () => {
  return (
    <div className="postcard-compoent">
      <div className="postcard-component-container">
        <div className="postcard-header">
          <div className="postcard-header-img">
            <img
              src="https://i.scdn.co/image/ab6765630000ba8a5b61945f5f6bf820d3d43fbe"
              alt=""
            />
          </div>
          <div className="postcard-header-content">
            <h2 className="postcard-header-podcast">Podcast</h2>
            <span>
              <h1 className="postcard-header-podcast-title">HIEU.TV</h1>
            </span>
            <h2 className="postcard-header-podcast-name">Hieu Nguyen</h2>
          </div>
        </div>
        <div className="postcard-container">
          <div className="postcard-container-header">
            <button>Following</button>
            <FiMoreHorizontal size={32} />
          </div>
          <div className="postcard-container-content">
            <div className="postcard-container-content-left">
              <div className="postcard-container-content-left-header">
                <h3>All Episodes</h3>
              </div>
              <div className="postcard-container-content-left-content">
                <div className="postcard-container-content-left-list">
                  <div className="postcard-container-content-left-item">
                    <div className="postcard-container-content-left-item-img">
                      <img
                        src="https://i.scdn.co/image/ab6765630000ba8a5cf5c4150b2ad8fdf5f20f34"
                        alt=""
                      />
                    </div>
                    <div className="postcard-container-content-left-item-content">
                      <div className="podcart-item-icon-container">
                        <div className="podcart-item-icon">
                          <AiFillPlayCircle size={40} />
                          <p>May 24 . 19 min 5 sec</p>
                        </div>
                        <div className="padcont-item-right-icon">
                          <AiFillPlusCircle size={40} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="postcard-container-content-left-item">
                    <div className="postcard-container-content-left-item-img">
                      <img
                        src="https://i.scdn.co/image/ab6765630000ba8a5cf5c4150b2ad8fdf5f20f34"
                        alt=""
                      />
                    </div>
                    <div className="postcard-container-content-left-item-content">
                      
                      <div className="podcart-item-icon-container">
                        <div className="podcart-item-icon">
                          <AiFillPlayCircle size={40} />
                          <p>May 24 . 19 min 5 sec</p>
                        </div>
                        <div className="padcont-item-right-icon">
                          <AiFillPlusCircle size={40} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="postcard-container-content-right">
              <div className="postcard-container-content-right-header">
                <h3>About</h3>
              </div>
              <div className="postcard-container-content-right-content">
                <p>Tôi sinh ra và lớn lên ở Việt Nam nhưng hiện đang sinh sống và làm việc tại Úc. Hiện tại tôi là cố vấn cho chính phủ Úc về Digital Strategy. Hơn 20 năm làm việc ở nhiều nơi trên thế giới, tôi tích lũy được một số bài học và</p>
              </div>
              <div className="postcard-container-content-right-btn">
                <span>Self-help</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCardComponent;
