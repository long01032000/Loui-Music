import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import "./index.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Enpoint } from "../../Endpoint";
import { Link, useLocation } from "react-router-dom";

const Header = ({ title }) => {
  const [user, setUser] = useState();
  const location = useLocation();
  const [isOpen, setIsOpen] =useState(false)
  const isTrueAvatar = () => {
    if (
      location.pathname.includes("likedsong") ||
      location.pathname.includes("librarysong")
    ) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    getUser();
  }, []);
  const isTrueAvatars = () => {
    if (
      location.pathname.includes("seach"))
     {
      return true;
    }
    return false;
  };
  useEffect(() => {
    getUser();
  }, []);
  const isTrueAvatarDashboard = () => {
    if (
      location.pathname.includes("dashboard"))
     {
      return true;
    }
    return false;
  };
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${Enpoint}user/me`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        localStorage.setItem("email", res.data.email);
        setUser(res?.data);
      }
    } catch (error) {}
  };
  const Logout = () =>{
    localStorage.clear('token')
    window.location.reload()
  }

  return (
    <div className="header-conponents" style={{maxWidth: isTrueAvatarDashboard() ? "none" : "955px"}}>
      <div className="header-left-container">
    
        {title ? <h4>{title}</h4> : <div></div>}
      </div>
      <div className="header-right-container">
        <div
          className="header-right-container-content"
          style={{
            backgroundColor: isTrueAvatar() ? "#ffffff" : "#282828",
            marginTop: isTrueAvatar() ? "10px" : "0px",
            marginTop: isTrueAvatars() ? "10px" : "0px",
            
          }}
        >
          <img
            src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            className="avatar"
            alt=""
          />
          <span style={{ color: isTrueAvatar() ? "#000000" : "#ffffff" }}>
            {user?.userName || user?.email}
          </span>
          <div>
            <AiFillCaretDown
              style={{ fill: isTrueAvatar() ? "#000000" : "#ffffff" }}
              onClick={()=> setIsOpen(!isOpen)}
            />
            <div className="dropdown" style={{ 
              display: isOpen ? 'block': 'none',
              right: isTrueAvatarDashboard() ? "37px" : "166px"
          }}>
             <ul className="item-contents">
              <li className="item-name">
              <button className="item-button" style={{borderStyle: 'hidden'}}>
                <span>Account</span>
                </button>
                </li>
              <li className="item-name">
                <button className="item-button" style={{borderStyle: 'hidden'}}>
                <span>Profile</span>
                </button>
                </li>
             <li className="item-name"><button className="item-button" style={{borderStyle: 'hidden'}}>{
               <span onClick={()=> Logout()}><Link style={{textDecoration: 'none', color: '#ffffff'}} to='/login'>Logout</Link></span> 
              }</button></li>
             </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
