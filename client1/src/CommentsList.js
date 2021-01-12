import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

export default ( { postId } ) => {
  const [comments, setComments] = useState( [] );


  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`, { comments } );
    setComments( res.data );
  };

  useEffect( () => {
    fetchComments();
  }, [] );

  const renderedComments = comments.map( comment => {
    return <li key={comment.id}>{comment.content}</li>
  } )
  return ( <ul>
    {renderedComments}
  </ul> );
}