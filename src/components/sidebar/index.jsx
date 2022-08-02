import React, { useState } from "react";
import "./index.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-h5-audio-player/lib/styles.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AudioPlayer from "react-h5-audio-player";
import "react-pro-sidebar/dist/css/styles.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMusicNote } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const Sidebar = ({data}) => {
  const location = useLocation();
  const [trackIndex, setTrackIndex] = useState(0); //audio index
  const musicTracks = data;

  
 


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
  return (
    <>
    {!(location.pathname.includes("dashboard") || location.pathname.includes('login'))?(
      <ProSidebar className="sibar-component">
        <SidebarHeader className="sidebar-title">Loui$ Music</SidebarHeader>
        <SidebarContent className="sidebar-content">
          <Menu>
            <MenuItem className="sidebar-header">Menu</MenuItem>
            <MenuItem>
              <AiOutlineHome />
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <AiOutlineSearch /> <Link to="/seach">Search</Link>
            </MenuItem>
            {/* <MenuItem>
              <MdStackedBarChart />
              <Link to="/trending">Trends</Link>
            </MenuItem> */}
            <MenuItem>
              <BsMusicNote />
              <Link to="/listRoom">Music room</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarContent className="sidebar-content">
          <Menu>
            <MenuItem className="sidebar-header">Your Collection</MenuItem>
            <MenuItem>
              <AiFillHeart />
              <Link to="/likedsong">Liked Songs</Link>
            </MenuItem>
            <MenuItem>
              <AiOutlineUser /> 
              <Link to="/librarysong">Library</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          {!location.pathname.includes("chat-music") ? (
            <div className="audio-container">
              <h4 className="cover-text-sidebar">{musicTracks[trackIndex]?.musicName}</h4>
              <div className="audio-header">
                <div className="audio-header-image">
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
          ) : (
            <></>
          )}
        </SidebarFooter>
      </ProSidebar>
    ) : (
      <></>
    )}
    </>
  );
};

export default Sidebar;
