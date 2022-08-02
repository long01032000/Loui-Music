import React from 'react'
import ArtistComponent from '../../components/ArtistComponent'
import Footer from '../../components/Footer'
import Header from '../../components/header'
import './index.css'
const Artist = ({data,chooseMusic}) => {
  const getMusic  = (val) => {
    chooseMusic(val)
  }
  return (
      <>
      <main className="podcart-mgm" style={{ width: "100%" ,marginLeft:'357px',  maxWidth : '1162px'}}>
        <Header />
        <ArtistComponent data={data} chooseMusic={getMusic}/>
      </main>
      <Footer />
      </>
  )
}

export default Artist