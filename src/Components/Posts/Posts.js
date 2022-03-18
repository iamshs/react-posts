import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Posts = () => {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
            <h1>All Posts:{posts.length}</h1>
          {
              posts.map(post => <Post
                 post={post}
                 key ={post.id}
              ></Post> )
          }  
        </div>
    );
};

export default Posts;