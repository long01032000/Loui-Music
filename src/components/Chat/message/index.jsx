import React,{useState,useEffect} from "react";
import "./index.css";
import axios from 'axios'
import { Enpoint} from './../../../Endpoint'
const Message = ({ data }) => {
  const [user,setUser] = useState()
  useEffect(() =>{
    getUser();
  },[])
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
        localStorage.setItem("email", res.data?.email);
        setUser(res?.data);
      }
    } catch (error) {}
  };
  return (
    <div className="message-component">
      <div className="message-container" style={{ flexDirection: !(data?.email === user?.email) ? 'row-reverse' : 'row'}} >
        <div className="mess-content">
          <span>{data?.message}</span>
          <span className="user-name">{data?.email}</span>
        </div>
        <img
          src={
            data?.img ||
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
