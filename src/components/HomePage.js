import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Cookies from "js-cookie";
import "../style.css";

import CreatePost from "./CreatePost";

function HomePage() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch("api/v1/posts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);
 


  // likes posts

  const likePost = (id) => {
    fetch(`api/v1/posts/${id}/like`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData((prevData) => {
          return prevData.map((item) =>{
            if(item._id === id){
              return{...item, liked:true}
            }else{
              return item;  
            }
          })   
        });
      });
  };

  // Function to unlike a post
const unlikePost = (id) => {
  fetch(`/api/v1/posts/${id}/unlike`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('jwt')}`,
    },
    body: JSON.stringify({
      postId: id,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      setData((prevData)=>{
        return prevData.map((item)=>{
          if (item._id === id) {
            return { ...item, liked: false };
          } else {
            return item;
          }
        })
      })
      // Perform any necessary actions, such as updating the state or re-fetching the posts
    })
    .catch((error) => {
      console.log(error);
      // Handle any errors that occur during the request
    });
};
  // Function to handle like button click
  const handleLikeClick = (id) => {
    const post = data.find((item) => item._id === id);
    if (post && post.liked) {
      unlikePost(id);
    } else {
      likePost(id);
    }
  };

  return (
    <div className="homepage">
      <Navbar/>
      <div className="card home-card">
        <CreatePost/>
      </div>

      {data && data.map((item) => {
        const { content, images, user ,likes,liked } = item || {};
        
        if (content){
          
  // Check if user exists and has at least one element
          const username = user[0].username;
        return (
          <div className="card home-card" key={item._id}>
            <h5>{username}</h5>
            <div className="card-image">
              <img src={images[0]} alt="image1" />
            </div>
            <div className="card-content">
            <i className="material-icons" onClick={() => handleLikeClick(item._id)}>
                  {liked ? 'favorite' : 'favorite_border'}
                </i>
              <i className="material-icons">comment</i>
              <i className="material-icons">send</i>
              <h5>{likes.length} likes</h5>
              <h5>{content}</h5>
              <input type="text" placeholder="add a comment" />
            </div>
          </div>
          
        )} else{
          return null;
        };
      })}
    </div>
  );
}

export default HomePage;
