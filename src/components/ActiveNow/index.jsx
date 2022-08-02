import React from 'react'
import ListActive from './ListActive'
import './index.css'
import {GetRoomChat} from '../../Api/musicRoom'
import {GetUser} from '../../Api/user'
import { useEffect, useState } from 'react'

const ActiveNow = ({data}) => {
  const [roomData, setRoomData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(()=>{
    getAllChatRoom();
    getAllUser();
  }, []);

  const getAllChatRoom = async () => {
    try {
      const res = await GetRoomChat();
      if (res === false) return;
      setRoomData(res);
    } catch (error) {}
  };

  const getAllUser = async () => {
    try {
      const res = await GetUser();
      if (res === false) return;
      setUserData(res);
    } catch (error) {}
  };
  const sliceData = ()  =>{
    if(roomData.length >= 3){
      const newData = roomData.slice(0,3)
      return newData
    }
    return roomData
  }
  return (
    <div className='activenow-component'>
      <div className='activenow-component-center'>
        <div className='activenow-component-heaeder'>
          <h3>Active now</h3>
        </div>
        <div className='activenow-component-container'>
          {
            sliceData().map((e, index) =>{
              return <ListActive key={index} data={e} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ActiveNow