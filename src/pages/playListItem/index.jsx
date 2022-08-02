import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import PlayListCompoent from "../../components/PlayListCompoent";
import "./index.css";
const PlayListItem = () => {
  return (
    <>
      <main className="podcart-mgm" style={{ width: "100%" }}>
        <Header />
        <PlayListCompoent />
      </main>
      <Footer />
    </>
  );
};

export default PlayListItem;
