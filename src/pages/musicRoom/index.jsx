import React from "react";
import ChatComponent from "../../components/Chat";
import Footer from "../../components/Footer";
import TalkMember from "../../components/TalkMember";
import "./index.css";
const MusicRoom = () => {
  return (
    <>
      <main style={{ width: "80%", padding: "0 30px 0 45px" }}>
        <div className="musicroom-container">
          <TalkMember />
          <ChatComponent />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MusicRoom;
