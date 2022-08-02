import React, { useEffect, useState } from "react";
import "./index.css";
import { VscSmiley } from "react-icons/vsc";
import { IoIosSend } from "react-icons/io";
import Message from "./message";
import { IoPersonAddSharp } from "react-icons/io5";
import { AiOutlineCaretDown } from "react-icons/ai";
import Avatar from "./avatar";
import { socket } from "../../pages/helper";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Enpoint } from "../../Endpoint";

const ChatComponent = () => {
  const {_id} = useParams();
  const [messages, setMessage] = useState("");

  const [arr, setArr] = useState([
   
  ]);
  const person = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];
 
  useEffect(() =>{
    joinTheRoom()
    getMessgeFromDB();
  },[])
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setArr((arr) => [...arr,data.data])
    });
  }, [socket]);
  const getMessgeFromDB = async () =>{
    try {
      const res = await axios.get(`${Enpoint}get-room/${_id}`)
      if(res){
        setArr(res.data?.messageChat)
      }
    } catch (error) {
      
    }
  }
  const sendMessage1  = async () =>{

    const token = localStorage.getItem('token')
    const res = await axios.post(`${Enpoint}message/${_id}`,{message: messages},{
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    await socket.emit("send_message", {
      room: _id,
      data:res.data
    });
    setArr((arr)=>[...arr,res.data])
    setMessage('')

  }
  const joinTheRoom = () =>{
    socket.emit('join_room',_id)
  }

  return (
    <div className="chat-componet">
      <div className="chat-component-container">
        <div className="chat-header-component">
          <div className="chat-header-container">
            <div className="chat-header-left">
              <IoPersonAddSharp /> <AiOutlineCaretDown />
            </div>
            <div className="chat-header-right">
              {person.map((e, index) => {
                return <Avatar data={e} key={index} />;
              })}
            </div>
          </div>
        </div>
        <div className="chat-container-componet">
          {arr.map((e, index) => {
            return <Message data={e} key={index} />;
          })}
        </div>
        <div className="chat-footer-component">
          <div className="chat-footer-content">
            <div className="chat-footer-left-content">
              <input
                placeholder="Message...!"
                value={messages}
                onChange={(e) => setMessage(e?.target?.value)}
              />
              <VscSmiley /> 
            </div>
            <div className="chat-footer-right-content">
              <IoIosSend onClick={() => sendMessage1()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
