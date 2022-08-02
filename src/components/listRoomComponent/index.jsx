import React, { useEffect } from "react";
import "./index.css";
import { useState } from "react";
import { FaHeadphones } from "react-icons/fa";
import axios from "axios";
import { URL } from "../../pages/helper";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { HiPlusSm } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import {toast} from 'wc-toast'
import { socket } from "../../pages/helper";

const ListRoomComponent = () => {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);
  const [roomName, setRoomName] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const handleClose = () => {
    createRoomMusic();
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const getData = async () => {
    try {
      const data = await axios.get(`${URL}roomschat`);
      if (data) {
        setItems(data?.data);
      }
    } catch (error) {}
  };
  const createRoomMusic = async () => {
    try {
      if (!roomName) return;
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${URL}roomchat`,
        {
          roomName: roomName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res) {
        toast.success("Create Room Success");
        setItems([res?.data, ...items]);
      }
    } catch (error) {}
  };
  const deleteRoom = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${URL}delete-chat/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        if(res.status === 201){
          return toast.error(res.data.message)
        }
        const newData =  items.filter(e => e._id !== id)
        setItems(newData)
        return toast.success("Delete Success")


      }
    } catch (error) {}
  };
  return (
    <div className="listRoomComponent" style={{ paddingTop: "10px" }}>
      <Button variant="secondary" onClick={handleShow}>
        <HiPlusSm /> Create Room
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Room Music</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder="Enter name of room"
            className="room-name-input"
            onChange={(e) => setRoomName(e?.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="listRoom-component">
        <div className="lisRoom-component-list">
          {items.map((e, index) => {
            return (
              <div
                to={`/chat-music/${e?._id}`}
                key={index}
                className="listRoom-component-list-item"
              >
                <div className="list-componrnt-list-item-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvduZdcJarAFvoeb88KL4SaxE24UA43EkUJdjbwi-GZXGz_-4j14f&usqp=CAE&s"
                    alt=""
                  />
                  <div className="list-componrnt-list-item-title">
                    {e?.roomName}
                  </div>
                </div>
                <div className="className-list-componrnt-list-item-img">
                  <Link to={`/chat-music/${e?._id}`}>
                    <FaHeadphones size={42} color={'black'} style={{marginRight : '10px'}}/>
                  </Link>
                  <AiFillDelete size={42} onClick={() => deleteRoom(e._id)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListRoomComponent;
