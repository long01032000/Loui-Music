import axios from "axios";
import React, { useEffect, useState } from "react";
import { GetAllMusic } from "../../Api/music";
import Banner from "../../components/banner";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import Listitem from "../../components/Listitem";
import { URL } from "../helper";
import "./index.css";
const Home = ({ chooseMusic }) => {
  const [musicTracks, setMusicTracks] = useState([]);
  const [album, setAlbum] = useState([])

  useEffect(() => {
    getAllMucisComponent();
    getAllArtist();
  }, []);
  const getMuisc = (e) => {
    chooseMusic(e);
  };
  const setMusic = (event) => {
    const index = musicTracks.findIndex((e) => e._id === event._id);
    const data = musicTracks;
    data[index].isLike = !data[index].isLike;
    setMusicTracks(data);
  };
  const getAllMucisComponent = async () => {
    try {
      const res = await GetAllMusic();
      if (res === false) return;
      setMusicTracks(res);
    } catch (error) {}
  };
  const getAllArtist = async() =>{
    try {
      const res = await axios.get(`${URL}artists`)
      if(res){
        setAlbum(res.data)
      }
    } catch {
      
    }
  }
  return (
    <>
      <main style={{ marginLeft: "400px", maxWidth: "960px" }}>
        <Header title="Home" />
        <Banner data={album} />
        <Listitem
          title="Trending"
          data={musicTracks}
          chooseMusic={getMuisc}
          isLikeMusic={setMusic}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
