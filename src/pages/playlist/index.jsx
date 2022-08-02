import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import PlayListItem from "../../components/PlayList";
const PlayList = () => {
  return (
    <>
      <main style={{ width: "100%", padding: "0 30px 0 45px" }}>
        <Header title="Play list" />
        <PlayListItem />
      </main>
      <Footer />
    </>
  );
};

export default PlayList;
