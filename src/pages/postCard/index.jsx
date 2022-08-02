import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import PostCardComponent from "../../components/postCardComponet";
import "./index.css";
const PostCard = () => {
  return (
    <>
      <main className="podcart-mgm" style={{ width: "100%" }}>
        <Header />
        <PostCardComponent />
      </main>
      <Footer />
    </>
  );
};

export default PostCard;
