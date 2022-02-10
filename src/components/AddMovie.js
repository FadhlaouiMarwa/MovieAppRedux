import React, { useState } from 'react'
import { Input } from 'antd';
import {Button,Modal}from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { AddNewMovie } from '../redux/actions/action';
function AddMovie() {
  const dispatch=useDispatch()
  const handeleADD=()=>{
    dispatch(AddNewMovie({title:title,description:description,rate:rate,posterUrl:posterUrl}))
    handleClose()
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setrate] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        
      <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <div>
            <label>Title</label>
            <Input type="text" placeholder='Enter the title here' onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
            <label>Description</label>
            <Input type="text" placeholder='Enter description here' onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div>
            <label>Rate</label>
            <Input type="text" placeholder='Enter the rate here' onChange={(e)=>setrate(e.target.value)}/>
            </div>
            <div>
            <label>PosterUrl</label>
            <Input type="text" placeholder='Enter the PosterUrl here' onChange={(e)=>setPosterUrl(e.target.value)}/>
            </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handeleADD()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   
    </div>
  )
}

export default AddMovie