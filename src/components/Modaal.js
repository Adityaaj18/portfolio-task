import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'

const Modaal = ({ show, handleClose, newPost }) => {
   const [modalPost, setModalPost] = useState()
   // posts.map((post) => (postId == post.id ? setModalPost(post) : null))
   console.log(newPost)
   return (
      <>
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>{newPost.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{newPost.body}</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   )
}

export default Modaal
