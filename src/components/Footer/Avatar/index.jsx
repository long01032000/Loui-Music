import React from 'react'
import './index.css'
const AvatarFooter = ({img}) => {
  return (
    <div className='avatar-footer'>
        <img src={img} className='avatar-footer-img' />
    </div>
  )
}

export default AvatarFooter