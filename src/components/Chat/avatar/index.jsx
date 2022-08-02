import React from 'react'
import './index.css'
const Avatar = ({data}) => {
  return (
    <div className='avatar-component'>
        <img src={data?.img} alt="..."/>
    </div>
  )
}

export default Avatar