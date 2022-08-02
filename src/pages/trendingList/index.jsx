import React, { useEffect, useState } from "react";
import { GetAllMusic } from "../../Api/music";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import CustomeItem from "../../components/Listitem/TrendingCustome/customeItem";
import "./index.css";
const TrendingList = () => {
  const [musicTracks, setMusicTracks] = useState([]);
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
    <>
      <main
        style={{ width: "70%", marginLeft: "400px" }}
      >
        <div className="musicroom-container">
          <Header title="Songs" />
          <div
            className="custome-container-content"
            style={{ width: "calc(100% - 170px)" }}
          >
            {musicTracks.map((e, index) => {
              return <CustomeItem data={e} key={index} id={index} />;
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TrendingList;
