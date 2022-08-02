import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import LibrarySongComponent from "../../components/LibrarySong";

const LibrarySong = ({data}) => {
  return (
    <>
      <main
        style={{
          width: "100%",
          padding: "0 30px 0 45px",
          background: "#332f2f",
          marginLeft: "357px",
          height: "100vh",
          maxWidth: "1179px"
        }}
      >
        <Header />
        <LibrarySongComponent data={data}/>
      </main>
      <Footer />
    </>
  );
};

export default LibrarySong;
