import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import TrendingBannner from "../../components/TrendingBanner";
import "./index.css";
const Trending = () => {
  return (
    <>
      <main
        style={{
          width: "100%",
          padding: "0 30px 0 45px",
          marginLeft: "400px",
          width: "calc(100% - 400px)",
        }}
      >
        <Header title="For you" />
        <TrendingBannner />
        {/* <Listitem title='Track of the weeks' isToplist={true}/> */}
      </main>
      <Footer />
    </>
  );
};

export default Trending;
