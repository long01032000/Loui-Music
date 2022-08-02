import React from 'react'
import './index.css'
const ItemTrending = ({data}) => {
  return (
    <div className='item-trending-component'>
        <img src={data?.img} />
    </div>
  )
}

export default ItemTrending