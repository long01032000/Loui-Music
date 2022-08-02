import React from 'react'
import { BiVolumeMute} from 'react-icons/bi'
import './index.css'
const PlayListMember = ({data}) => {
  return (
    <div className='playlistmember-container'>
        <div className='playlistmember-icon'>
            <BiVolumeMute />
        </div>
        <div className='playlistmember-img'>
            <img src={data?.img} />
        </div>
    </div>
  )
}

export default PlayListMember