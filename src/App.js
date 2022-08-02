import Home from "./pages/home";
// import './app.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trending from "./pages/Trending";
import Seach from "./pages/Search";
import PlayList from "./pages/playlist";
import MusicRoom from "./pages/musicRoom";
import DashBoard from "./pages/dashboard";
import LikeSong from "./pages/likedSong";
import LibrarySong from "./pages/LibrarySong";
import PostCard from "./pages/postCard";
import PlayListItem from "./pages/playListItem";
import Album from "./pages/Album";
import Artist from "./pages/artist";
import Login from "./pages/login";
import SliderChatMusic from "./pages/SliderMusicChat";
import LisRoom from "./pages/ListRoom";
import ItemMusic from "./pages/ItemMusic";
import ListTracked from "./pages/listTracked";
import TrendingList from "./pages/trendingList";
import Sidebar from "./components/sidebar";
import { useEffect, useState } from "react";
import { GetAllMusic } from "./Api/music";
import Search from "./pages/Search";
import PlayListDetail from "./pages/PlayListDetail";
import AlbumList from "./pages/albumList";
function App() {
  const [musicTracks, setMusicTracks] = useState([
    
  ]);

  useEffect(() => {
    getAllMusicComponent();
  }, []);

  const getAllMusicComponent = async () => {
    try {
      const res = await GetAllMusic();
      if (res === false) return;
      setMusicTracks(res);
    } catch (error) {}
  };
  const getMusic = (e) =>{
    const data = musicTracks.filter(item => item._id !== e._id)
    setMusicTracks([e,...data])
  }
  return (
    <div className="trending-components">
      <Router>
        <div style={{ width: '100%'}}>
          <Sidebar data={musicTracks} />
        <Routes>
          <Route path="/" element={<Home chooseMusic={getMusic} />} />
          <Route path="/seach" element={<Search chooseMusic={getMusic} />} />
          <Route path="/playlist" element={<PlayList />} />
          <Route path="/musicroom" element={<MusicRoom />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/likedsong" element={<LikeSong chooseMusic={getMusic}/>} />
          <Route path="/librarysong" element={<LibrarySong data={musicTracks} />} />
          <Route path="/postcard/:id" element={<PostCard />} />
          <Route path="/playlist/:id" element={<PlayListItem />} />
          <Route path="/album/:id" element={<Album data={musicTracks} chooseMusic={getMusic} />} />
          <Route path="/artist/:id" element={<Artist data={musicTracks} chooseMusic={getMusic}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat-music/:_id" element={<SliderChatMusic />} />
          <Route path="/listRoom" element={<LisRoom />} />
          <Route path="/itemMusic" element={<ItemMusic />} />
          <Route path="/item-music/:_id" element={<ItemMusic />} />
          <Route path="/list-tracked" element={<ListTracked />} />
          <Route path="/list-album" element={<AlbumList />} />
          <Route path="/list-trending" element={<TrendingList />} />
          <Route path="/play-list/:_id" element={<PlayListDetail />} />

        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
