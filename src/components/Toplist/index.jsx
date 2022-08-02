import React from "react";
import MusicBanner from "../banner/MusicBanner";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Toplist = () => {
  const [artistList, setArtistList] = useState([]);
  
  useEffect(() => {
    getArtist();
  }, []);

//load artist data
  const getArtist = async () => {
    try {
      const res = await axios.get("http://localhost:5000/artists");
      // console.log('-================================', res.data)

      if (res) {
        setArtistList(res?.data);
      }
    } catch (error) {}
  };

  

  const sliceData = ()  =>{
    if(artistList.length >= 4){
      const newData = artistList.slice(0,4)
      return newData
    }
    return artistList
  }
      // console.log('-=========+++++---=======================', artistList)
  
  return (
    <div className="banner-component-right-conntent">
      <div className="banner-componnent-right-content-main">
        <div className="banner-componnent-right-content-main-header">
          <h1>Top Artist</h1>
        </div>
        <div className="banner-componnent-right-content-main-list">
          {sliceData().map((item, index) => {
            return <MusicBanner key={index} data={item} />;            
          })}
        </div>
        <div className="banner-seemore">
        <Link to='/list-tracked' data={artistList} style={{textDecoration: 'none'}}><span>See more</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Toplist;
