import React, { useState } from "react";
import Header from "../../components/header";
import { BsEye } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GoCommentDiscussion } from "react-icons/go";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import "./index.css";
import Form from "react-bootstrap/Form";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import { Enpoint } from "../../Endpoint";
import { toast } from "wc-toast";
import { useEffect } from "react";
import { GetAllMusic } from "../../Api/music";
import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import Table from "react-bootstrap/Table";

const DashBoard = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];
  const [musicUpload, setMusicUpload] = useState({
    album: "",
    artist: "",
    music: "",
    typeMusic: "",
    musicName: "",
    imgSrc: "",
  });
  const [listArtist, setListArtist] = useState([]);
  const [albumList, setAlbumList] = useState([]);

  const [album, setAlbum] = useState({
    name: '',
    image: ''
  });

  const [artist, setArtist] = useState({
    name: "",
    image: "",
  });
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  let navigate = useNavigate();
  const handleClose2 = () => setShow2(false);

  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);

  const [musicTracks, setMusicTracks] = useState([]);
  useEffect(() => {
    getAllMusicComponent();
    getArtist();
    getAlbum();
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${Enpoint}user/me`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        console.log(res.data.email)
        if(res.data.email !== 'admin@gmail.com'){
          return navigate("/");
        }
      }
    } catch (error) {}
  };
  const getAllMusicComponent = async () => {
    try {
      const res = await GetAllMusic();
      if (res === false) return;
      setMusicTracks(res);
    } catch (error) {}
  };
  
  const getArtist = async() =>{
    try {
      const res = await axios.get(`${Enpoint}artists`);
      if(res){
        setListArtist(res.data)
      }
    } catch (error) {}
  };
  const getAlbum = async () => {
    try {
      const res = await axios.get(`${Enpoint}albums`);
      if (res) {
        setAlbumList(res.data);
      }
    } catch (error) {}
  };

  const deleteMusic = async (id)=> {
    const res = axios.delete(`http://localhost:5000/delete-music/${id}`)
    if (res) {
      toast.success("delete music success");
      setMusicTracks(musicTracks.filter(({id})=>{
        return id !== id;
      }))
      window.location.reload();
    }}

  const uploadMusic = async (file) => {
    try {
      const data = new FormData();
      data.append("file", file);
      const res = await axios.post(`${Enpoint}upload/mp3`, data);
      if (res) {
        toast.success("Upload music success");
        setMusicUpload({ ...musicUpload, music: res?.data?.url });
      }
    } catch (error) {}
  };
  const uploadImage = async (file) => {
    try {
      const data = new FormData();
      data.append("file", file);
      const res = await axios.post(`${Enpoint}upload/mp3`, data);
      if (res) {
        toast.success("Upload music success");
        setMusicUpload({ ...musicUpload, imgSrc: res?.data?.url });
      }
    } catch (error) {}
  };
  const uploadImage1 = async (file) => {
    try {
      const data = new FormData();
      data.append("file", file);
      const res = await axios.post(`${Enpoint}upload/mp3`, data);
      if (res) {
        toast.success("Upload music success");
        setArtist({ ...artist, image: res?.data?.url });
      }
    } catch (error) {}
  };
  const uploadImage2 = async (file) => {
    try {
      const data = new FormData();
      data.append("file", file);
      const res = await axios.post(`${Enpoint}upload/mp3`, data);
      if (res) {
        toast.success("Upload music success");
        setAlbum({ ...album, image: res?.data?.url });
      }
    } catch (error) {}
  };
  const createMusic = async () => {
    try {
      const res = await axios.post(`${Enpoint}create-music`, musicUpload);
      if (res) {
        setMusicTracks([...musicTracks, res?.data]);
      }
      setShow(false);
    } catch (error) {}
  };
  const createArtist = async () => {
    try {
      const res = await axios.post(`${Enpoint}create-artist`, artist);
      if (res) {
        toast.success("create success");
      }
      setShow1(false);
    } catch (error) {}
  };

  const createAlbum = async () => {
    try {
      const res = await axios.post(`${Enpoint}create-album`, album);
      if (res) {
        toast.success("create success");
      }
      setShow2(false);
    } catch (error) {}
  };
  console.log(musicUpload);
  return (
    <div className="trending-components" style={{ background: "#E5E5E5" }}>
      {/* <Sidebar /> */}
      <main
        className="trending-content"
        style={{ width: "100%", padding: "0 30px 0 45px" }}
      >
        <Header title="User management" />
        <Button variant="primary" onClick={handleShow} style={{marginRight: '5px'}}>
          <BsPlus />
          Create Music
        </Button>
        <Button variant="primary" onClick={handleShow1} style={{marginRight: '5px'}}>
          <BsPlus />
          Create artist
        </Button>
        <Button variant="primary" onClick={handleShow2}>
          <BsPlus />
          Create album
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Music</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Select Album</Form.Label>
                <select
                  onChange={(e) =>
                    setMusicUpload({ ...musicUpload, album: e.target.value })
                  }
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select artist</option>
                  {albumList.map((e, index) => {
                    return (
                      <option key={index} value={e?.name}>
                        {e.name}
                      </option>
                    );
                  })}
                </select>
                
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Type music</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter album music"
                  onChange={(e) =>
                    setMusicUpload({
                      ...musicUpload,
                      typeMusic: e.target.value,
                    })
                  }
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Artist music</Form.Label>
                <select
                  onChange={(e) =>
                    setMusicUpload({ ...musicUpload, artist: e.target.value })
                  }
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select artist</option>
                  {listArtist.map((e, index) => {
                    return (
                      <option key={index} value={e?.name}>
                        {e.name}
                      </option>
                    );
                  })}
                </select>
                {/* <Form.Control
                  type="text"
                  placeholder="Enter artist music"
                  onChange={(e) =>
                    setMusicUpload({ ...musicUpload, artist: e.target.value })
                  }
                /> */}
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Music name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name music"
                  onChange={(e) =>
                    setMusicUpload({
                      ...musicUpload,
                      musicName: e.target.value,
                    })
                  }
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mp3 music</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Enter mp3 music"
                  onChange={(e) => uploadMusic(e.target.files[0])}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image music</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Enter artist music"
                  onChange={(e) => uploadImage(e.target.files[0])}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => createMusic()}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={show2}
          onHide={handleClose2}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create album</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Album name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter album music"
                  onChange={(e) =>
                    setAlbum({ ...album, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image Album</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Enter artist music"
                  onChange={(e) => uploadImage2(e.target.files[0])}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="primary" onClick={() => createAlbum()}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={show1}
          onHide={handleClose1}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Artist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Artist name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter imgage"
                  onChange={(e) =>
                    setArtist({ ...artist, name: e.target.value })
                  }
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image artist</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Enter artist music"
                  onChange={(e) => uploadImage1(e.target.files[0])}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="primary" onClick={() => createArtist()}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="dashboard-main">
          <div className="dashboard-main__card" style={{ background: "#fff" }}>
            <div className="title">
              <div className="h5">Quick stats</div>
              <div className="line"></div>
            </div>
            <div className="card1__item">
              <div className="daily-view">
                <div className="icon">
                  <BsEye />
                </div>
                <div>
                  <div className="title-daily">Daily-views</div>
                  <strong className="title-number">100,450</strong>
                </div>
              </div>
              <div className="daily-view">
                <div className="icon icon-comment">
                  <GoCommentDiscussion />
                </div>
                <div>
                  <div className="title-daily">Daily-views</div>
                  <strong className="title-number">100,450</strong>
                </div>
              </div>
              <div className="daily-view">
                <div className="icon icon-acc">
                  <MdOutlineAccountCircle />
                </div>
                <div>
                  <div className="title-daily">Daily-views</div>
                  <strong className="title-number">100,450</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-main__card1">
            <div className="col-left">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="col-right">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 20,
                    right: 50,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
                  <ReferenceLine y={9800} label="Max" stroke="red" />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div class="container group">
          {musicTracks.map((e, index) => {
            return (
              <div class="grid-1-5" key={index} style={{ width: "280px" }}>
                <h2>{e?.musicName}</h2>
                <h3>
                  <span class="uppercase">{e?.artist}</span>
                </h3>
                <span>{e?.typeMusic}</span>
                <img src={e?.imgSrc} alt="" style={{ width: "100%" }} />
                <button onClick={() => deleteMusic(e?._id)}>delete</button>
              </div>
            );
          })}
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default DashBoard;
