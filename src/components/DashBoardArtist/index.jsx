import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsPlus } from "react-icons/bs";
import "./index.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Enpoint } from "../../Endpoint";
import { toast } from "wc-toast";
import { useEffect } from "react";
import { GetAllMusic } from "../../Api/music";
import { GetAllArtist } from "../../Api/artist";
import Table from 'react-bootstrap/Table';


const ArtistModal = () => {

  const [artistUpload, setArtistUpload] = useState({
    artistName: "",
    artistImg: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [artist, setArtist] = useState([]);


  // useEffect(() => {
  //   getAllArtistComponent();
  // }, []);


  const uploadImage = async (file) => {
    try {
      const data = new FormData();
      data.append("file", file);
      const res = await axios.post(`${Enpoint}upload/mp3`, data);
      if (res) {
        toast.success("Upload music success");
        setArtistUpload({ ...artistUpload, artistImg: res?.data?.url });
      }
    } catch (error) {}
  };

  const createArtist = async () => {
    const res = await axios.post('http://localhost:5000/create-artist', artistUpload)
    if(res){
      setArtist([...artist, res?.data])
    }
    setShow(false);
  };
  // console.log('===================', artist)
  return (
    <div>
              <Button variant="primary" onClick={handleShow}>
          <BsPlus />
          Create Artist
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
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
                  placeholder="Enter artist name"
                  onChange={(e) =>
                    setArtistUpload({ ...artistUpload, artistName: e.target.value })
                  }
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image artist</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Input artist image"
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
            <Button variant="primary" onClick={() => createArtist()}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
};

export default ArtistModal;
