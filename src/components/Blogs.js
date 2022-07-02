import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modaal from './Modaal'

const Blogs = () => {
   const [posts, setPosts] = useState([])
   const [newPost, setNewPosts] = useState([])
   const [show, setShow] = useState(false)
   const [postId, setPostId] = useState()

   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)

   useEffect(() => {
      axios
         .get('https://jsonplaceholder.typicode.com/posts/?_limit=9')
         .then((response) => {
            setPosts(response.data)
         })
   }, [])

   const handleClick = (id) => {
      axios
         .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then((response) => {
            setNewPosts(response.data)
         })
   }

   return (
      <div className="container">
         <div className="row">
            {posts.map((post) => (
               <div className="col-lg-4 gy-4" key={post.id}>
                  <div className="card">
                     <div className="card-body">
                        <h5 className="card-title">
                           {post.title > 5
                              ? `${post.title.substring(0, 10)}...`
                              : post.title}
                        </h5>
                        <p className="card-text">
                           {post.body > 10
                              ? `${post.body.substring(0, 10)}...`
                              : post.body}
                        </p>
                        <a
                           href="#"
                           className="btn btn-primary"
                           onClick={() => {
                              handleShow()
                              setPostId(post.id)
                              handleClick(post.id)
                           }}
                        >
                           See more
                        </a>
                     </div>
                  </div>
               </div>
            ))}

            <Modaal
               handleClose={handleClose}
               handleShow={handleShow}
               show={show}
               newPost={newPost}
            />
         </div>
      </div>
   )
}

export default Blogs
