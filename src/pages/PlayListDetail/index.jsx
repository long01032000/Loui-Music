import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import LikeSongComponent from "../../components/LikeSongComponent";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../helper";
import { toast } from "wc-toast";
import { useState } from "react";
import { useEffect } from "react";

const PlayListDetail = () => {
    const {_id} = useParams();
    const [data, setData] = useState([])
    const [title,setTitle] = useState('')
    useEffect(()=>{
        getDetail()
    },[])
    const getDetail = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get(`${URL}play-list/${_id}`, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            });
            if (res) {
                setData(res.data.playList)
                setTitle(res.data.name)
            }
          } catch (error) {
            return toast.error("Get music failed1");
          }
    }
  return (
    <>
      <main
        className="background-component"
        style={{ width: "100%", padding: "0 30px 0 45px", maxWidth: "1162px" }}
      >
        <Header />
        <LikeSongComponent data={data} title={title} />
      </main>
      <Footer />
    </>
  );
};

export default PlayListDetail;
