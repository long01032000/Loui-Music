import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "wc-toast";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import LikeSongComponent from "../../components/LikeSongComponent";
import Sidebar from "../../components/sidebar";
import { URL } from "../helper";
import "./index.css";
const LikeSong = ({chooseMusic}) => {
  const [data, setDate] = useState([]);

  useEffect(() => {
    getLikeSong();
  }, []);
  const getMusic = (val) =>{
    chooseMusic(val)
  }
  const getLikeSong = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${URL}list-like-music`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        setDate(res.data?.listLike);
      }
    } catch (error) {
      return toast.error("Get music failed1");
    }
  };
  return (
    <>
      <main
        className="background-component"
        style={{ width: "100%", padding: "0 30px 0 45px" , maxWidth : '1162px'}}
      >
        <Header />
        <LikeSongComponent chooseMusic={getMusic} data={data} />
      </main>
      <Footer />
    </>
  );
};

export default LikeSong;
