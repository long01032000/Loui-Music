import React from 'react'
import './index.css'
import Item from './item'
const PlayListItem = () => {
    const arr = [
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0e20jAuJL6J0ZpYXpSWUG6km0bzXEaOidg&usqp=CAU',
            title: 'Song name',
            actor: 'Artist'
        },
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0e20jAuJL6J0ZpYXpSWUG6km0bzXEaOidg&usqp=CAU',
            title: 'Song name',
            actor: 'Artist'
        },
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0e20jAuJL6J0ZpYXpSWUG6km0bzXEaOidg&usqp=CAU',
            title: 'Song name',
            actor: 'Artist'
        },
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0e20jAuJL6J0ZpYXpSWUG6km0bzXEaOidg&usqp=CAU',
            title: 'Song name',
            actor: 'Artist'
        },
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0e20jAuJL6J0ZpYXpSWUG6km0bzXEaOidg&usqp=CAU',
            title: 'Song name',
            actor: 'Artist'
        },
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0e20jAuJL6J0ZpYXpSWUG6km0bzXEaOidg&usqp=CAU',
            title: 'Song name',
            actor: 'Artist'
        },
    ]
  return (
    <div className='play-list'>
        {
            arr.map((e,index) =>{
                return <Item data={e} key={index} />
            })
        }
    </div>
  )
}

export default PlayListItem