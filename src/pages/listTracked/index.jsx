import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import axios from "axios";
import { BsMusicNoteBeamed } from "react-icons/bs";
import "./index.css";
const ListTracked = ({ data }) => {
  const [artistList, setArtistList] = useState([]);
  useEffect(() => {
    getArtist();
  }, []);
//load artist data
  const getArtist = async () => {
    try {
      const res = await axios.get("http://localhost:5000/artists");
      if (res) {
        setArtistList(res?.data);
      }
    } catch (error) {}
  };
  // const location = useLocation()
  return (
    <>
      <main
        style={{ width: "80%", maxWidth: "1110px", marginLeft: "400px" }}
      >
        <div className="musicroom-container">
          <Header title="Top Artists" />
          <div
            className="listitem-content tracked"
            style={{ width: "calc(100% - 170px)", marginTop: "30px" }}
          >
            {artistList.map((item, index) => {
              return (
                <div className= 'item-component-main'>
                  <div className="item-component-content">
                    <div className="item-image">
                      <img src={item?.image} alt={item?.name} />
                    </div>
                    <div className="item-content">
                      <span>{item?.name}</span>
                      <span style={{ display:'flex',alignItems:'center', gap: '0 5px'}}>
                        <BsMusicNoteBeamed />
                         artist
                      </span>
                    </div>
                  </div>
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
export default ListTracked;