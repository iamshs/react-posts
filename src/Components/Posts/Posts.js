import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
            <h1 className='post-header'>All Posts:{posts.length}</h1>
        <div className='post-container'>
           {
              posts.map(post => <Post
                 post={post}
                 key ={post.id}
              ></Post> )
           }  
        </div>
        </div>
    );
};

export default Posts;