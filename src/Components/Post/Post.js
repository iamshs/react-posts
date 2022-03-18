import React from 'react';
import './Post.css'
const Post = (props) => {
   const{title,body,userId}=props.post
    return (
        <div className='post'>
         <h3>Title:{title}</h3> 
         <p>Body :{body}</p>
         <p><small>userId:{userId}</small></p>  
        </div>
    );
};

export default Post;