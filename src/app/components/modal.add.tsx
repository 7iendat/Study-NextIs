'use client'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {  toast } from 'react-toastify';
import { mutate } from "swr"

interface IProps{
  displayModalAdd:boolean,
  setDisplayModalAdd:(value: boolean)=>void;
}

function ModalApp(props:IProps) {
  const {displayModalAdd, setDisplayModalAdd} = props;
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

   const handleAddBlog = () => {
    if(!title|| !author || !content){
      toast.error("Missing parameter");
      return;

    }
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, author,content})
    }).then(res => res.json())
      .then(res => {
        if(res){
          toast.success("Add success");
          handleCloseModal();
          mutate("http://localhost:8000/blogs");
        }
      });
  }

  const handleCloseModal = () =>{
    setTitle("");
    setAuthor("");
    setContent("");
    setDisplayModalAdd(false);
  }
  return (
    <>
      

      <Modal   style={{color:"black"}} show={displayModalAdd} onHide={() => handleCloseModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Add Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} value={content}
                onChange={(e) => setContent(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAddBlog()}>
            Save Blog
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalApp;