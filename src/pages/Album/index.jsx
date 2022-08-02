import React from "react";
import AlbumComponent from "../../components/Album";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import "./index.css";
const Album = ({data,chooseMusic}) => {
  const getMusic =(e) =>{
    chooseMusic(e)
  }
  return (
    <>
      <main className="podcart-mgm" style={{ width: "100%",marginLeft:'357px', maxWidth : '1162px', height: "calc(740px + 50px)" }}>
        <Header />
        <AlbumComponent data={data} chooseMusic={getMusic} />
      </main>
      <Footer />
    </>
  );
};

export default Album;
