import React, { useEffect, useState, useLocation } from "react";
import { GetAllMusic } from "../../Api/music";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import axios from "axios";
import { BsMusicNoteBeamed } from "react-icons/bs";

import "./index.css";
import { Link } from "react-router-dom";
const AlbumList = ({ data }) => {
  const [albumList, setAlbumList] = useState([]);
  
  useEffect(() => {
    getAlbum();
  }, []);

//load artist data
  const getAlbum = async () => {
    try {
      const res = await axios.get("http://localhost:5000/albums");
      if (res) {
        setAlbumList(res?.data);
      }
    } catch (error) {}
  };
  // const location = useLocation()
  console.log('============albumlist:', albumList)

  return (
    <>
      <main
        style={{ width: "80%", maxWidth: "1110px", marginLeft: "400px" }}
      >
        <div className="musicroom-container">
          <Header title="Hot Albums" />
          <div
            className="listitem-content tracked"
            style={{ width: "calc(100% - 170px)", marginTop: "30px" }}
          >
            {albumList.map((item, index) => {
              return (
                <div className= 'item-component-main'>
                  <Link to={`/album/${item._id}`}>
                    <div className="item-component-content">
                      <div className="item-image">
                        <img src={item?.image}  />
                      </div>
                      <div className="item-content">
                        <span>{item?.name}</span>
                        <span style={{ display:'flex',alignItems:'center', gap: '0 5px'}}>
                          <BsMusicNoteBeamed />
                          Album 
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AlbumList;
