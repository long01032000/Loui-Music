import Footer from "../../components/Footer";
import Header from "../../components/header";
import img3 from "./../../images/Frame 20.jpg";
import "./index.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { GetAllMusic } from "../../Api/music";
import axios from "axios";
import { Enpoint } from "../../Endpoint";
import { toast } from "wc-toast";
import { Link } from "react-router-dom";
const Search = ({chooseMusic}) => {
  const [searchMusic, setSearchMusic] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [artistList, setArtistList] = useState([]);
  const [album, setAlbum] = useState([])
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllMusicComponent();
    getAllArtist();
    getAllAlbum();
  }, []);
  const filterData = (event) => {
    setSearchItem(event.target.value);
    const data = searchMusic.filter((item) => {
      if (
        item.musicName.toLowerCase().includes(event.target.value.toLowerCase())
      ) {
        return item;
      }
    });
    if (data.length === 0) {
      return setData([]);
    }
    return setData([data[0]]);
  };
  const getAllArtist = async () => {
    try{
      const res = await axios.get("http://localhost:5000/artists");
      setArtistList(res?.data)
    }catch(error){}
  }
  const getAllAlbum = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${Enpoint}albums`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        setAlbum(res?.data);
      }
    } catch (error) {
      return toast.error("Get music failed1");
    }
  };
  const getAllMusicComponent = async () => {
    try {
      const res = await GetAllMusic();
      if (res === false) return;
      setSearchMusic(res);
    } catch (error) {}
  };
  const getMuisc = (e) =>{
    chooseMusic(e)
  }
  return (
    <>
      <main style={{ marginLeft: "400px", width: "100%" , maxWidth: '1050px'}}>
        <Header />
        <div>
          <input
            className="input-search-el"
            placeholder="Search"
            type="text"
            onChange={(event) => {
              filterData(event);
            }}
          />
        </div>
        {searchItem == "" ? (
          <div className="search-songs">
            <p>Search your favorite songs</p>
          </div>
        ) : (
          <div>
            <div className="main1">
              <div className="card1">
                <h1 className="top1">Top result</h1>
                <div className="top-search-container">
                  {data.map((item, index) => {
                    return (
                      <div className="divHome" key={index} onClick={()=>getMuisc(item)}>
                        <img src={item.imgSrc} alt="" />
                        <div className="icon-center-container">
                          <h1 className="top-search-result">
                            {item.musicName}
                            <h3 className="title-search-result">
                              {item.artist}
                            </h3>
                          </h1>
                          <div className="top-search-icon">
                            <AiFillPlayCircle size={60} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="card2">
                <Tabs>
                  <TabList className="tab-right">
                    <Tab>
                      <h1>Songs</h1>
                    </Tab>
                    <Tab>
                      <h2>See All</h2>
                    </Tab>
                  </TabList>
                  <TabPanel>
                    {searchMusic.filter((item) => {
                    if (searchItem == "") {
                      return item;
                    } else if (
                      item.musicName
                        .toLowerCase()
                        .includes(searchItem.toLowerCase())
                    ) {
                      return item;
                    }
                  }).map((item, index) => {
                      return (
                        <div className="songs" onClick={()=>getMuisc(item)}>
                          <div className="left">
                            <div className="img">
                              <img className="img" src={item?.imgSrc} alt="" />
                            </div>
                            <div className="title">
                              <h3 className="title-h31 cover-text">{item?.musicName}</h3>
                              <h3 className="title-h32">{item?.artist}</h3>
                            </div>
                          </div>
                          <div className="right">
                            <strong className="">3:30</strong>
                          </div>
                        </div>
                      );
                    })}
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 2</h2>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
            <div className="main2">
              <h1>Artists</h1>
              <div className="card-3">
                {artistList
                  .filter((item) => {
                    if (searchItem == "") {
                      return item;
                    } else if (
                      item.name
                        .toLowerCase()
                        .includes(searchItem.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((item, index) => {
                    return (
                      <div className="card-main">
                      <Link to = {`/artist/${item?._id}`}>
                          <div className="card-main-content">
                        <div className="artists-item">
                          <div className="img">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="bottom" style={{marginTop : '80px'}}>
                            <h3 className="title-h31">{item.name}</h3>
                            <h3 className="title-h32">Artist</h3>
                          </div>
                        </div>
                          </div>
                      </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="main3">
              <h1>Albums</h1>
              {album.filter((item) => {
                    if (searchItem == "") {
                      return item;
                    } else if (
                      item.name
                        .toLowerCase()
                        .includes(searchItem.toLowerCase())
                    ) {
                      return item;
                    }
                  }).map(item => {
                return(
                  <div className="card-4">
                      <Link to={`/album/${item?._id}`}>
                        <div className="card-main-1">
                          <div className="album-item">
                          <div className="img">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="bottom">
                            <h3 className="title-h31-album">{item.name}</h3>
                          </div>
                          </div>
                        </div>
                      </Link>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </main>
      <Footer />
      </>
  );
};
export default Search;