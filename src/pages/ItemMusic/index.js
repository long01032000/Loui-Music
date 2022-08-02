import React, { useEffect, useState } from 'react'
import { GetAllMusic } from '../../Api/music'
import Footer from '../../components/Footer'
import ItemMusicComponent from '../../components/itemMusicComponent'
import Sidebar from '../../components/sidebar'
import SliderChatMusicComponent from '../../components/sliderChatComponent'
import './index.css'
const ItemMusic = () => {
  const [musicTracks, setMusicTracks] = useState([
  ])
  useEffect(() =>{
    getAllMucisComponent()
  },[])
  const getAllMucisComponent = async() =>{
    try {
      const res = await GetAllMusic()
      if(res === false)
        return;
      setMusicTracks(res)
    } catch (error) {
      
    }
  }
  return (
    <>
      <main style={{ width: "100%", padding: "0 30px 0 45px" }}>
        <div className='musicroom-container music-slider'>
        <SliderChatMusicComponent musicTracks={musicTracks} />
        {/* <ChatComponent /> */}
        <ItemMusicComponent music={musicTracks} />
        </div>
      </main>
      <Footer />
      </>
  )
}

export default ItemMusic