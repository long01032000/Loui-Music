import React from 'react'
import './index.css'
import ItemTrending from './ItemTrending'
const TrendingBannner = () => {
    const arr = [
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_rhaNFaTmb347b0ANlqTzf5VJW4fZVIG-g&usqp=CAU',
        },
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdrCLA_01l7CUWpP7ytGDwXAC6HD54DFq-Q&usqp=CAU',
        },
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh2yFK8t-SRmVHVXZqGrk3QOFJJV0g4_80hg&usqp=CAU',
        },
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz19vsWTF44r453MYR8qgUuVJyaapu5kkxng&usqp=CAU',
        },
        
    ]
  return (
    <div className='trending-banner' style={{ width: 'calc(100% - 90px)'}}>
        <div className='trending-component item-trending-component'>
            {
                arr.map((e,index) =>{
                    return <ItemTrending data={e} key={index} />
                })
            }
        </div>
    </div>
  )
}

export default TrendingBannner