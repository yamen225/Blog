import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate'
import CommentList from './CommentsList'

export default () => {
  const [posts, setPosts] = useState( {} );

  const fetchPosts = async () => {
    const res = await axios.get( 'http://localhost:4000/posts' );
    setPosts( res.data );
  };

  useEffect( () => {
    fetchPosts();
  }, [] );

  const renderedPosts = Object.values( posts ).map( posts => {
    return ( <div className="card" style={{ width: '30%', marginBottom: '20px' }} key={posts.id}>
      <div className="card-body">
        <h3>{posts.title}</h3>
        <CommentList postId={posts.id} />
        <CommentCreate postId={posts.id} />
      </div>
    </div> );
  } )
  return <div className="d-flex flex-row flex-wrap justify-content-between">
    {renderedPosts}
  </div>;
}