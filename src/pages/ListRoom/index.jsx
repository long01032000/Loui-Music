import React, { useEffect, useState } from "react";
import { GetAllMusic } from "../../Api/music";
import Footer from "../../components/Footer";
import ListRoomComponent from "../../components/listRoomComponent";

const LisRoom = () => {
  const [musicTracks, setMusicTracks] = useState([]);
  console.log(musicTracks);
  useEffect(() => {
    getAllMucisComponent();
  }, []);
  const getAllMucisComponent = async () => {
    try {
      const res = await GetAllMusic();
      if (res === false) return;
      setMusicTracks(res);
    } catch (error) {}
  };
  return (
    <div style={{ width: '100%'}}>
      <main style={{ width: "100%", padding: "0 30px 0 45px" }}>
        <ListRoomComponent />
      </main>
      <Footer />
    </div>
  );
};

export default LisRoom;
