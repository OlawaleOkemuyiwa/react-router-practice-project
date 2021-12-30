import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Comments.module.css';
import CommentsList from './CommentsList';
import NewCommentForm from './NewCommentForm';

const Comments = props => {
  const [isAddingComment, setIsAddingComment] = useState(false);    //to hide|how the add comment button and form
  const { quoteId } = useParams();

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments, true);

  useEffect(() => { 
    sendRequest(quoteId)   //to get comments
  }, [sendRequest, quoteId])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  const onAddCommentHandler = useCallback(() => {     //this func is passed to NewForm child component and added as a depedency in its useEffect. useCallBack prevents re-creation of this func whenever the Comments component is re-executed which may lead to an infinite loop
    sendRequest(quoteId);                             //after adding a new comment to the backend, immediaely send request to get the data of such comment which then updates the comment list is the new data needed
  }, [sendRequest, quoteId]);
  
  let comments;
  if (status === 'pending') {
    comments = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (status === 'completed' && (loadedComments && loadedComments.length > 0)) {
    comments = <CommentsList comments={loadedComments}/>
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className='centered'>No comments added yet!</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm notifyParentAfterAddingComment={onAddCommentHandler} quoteId={quoteId}/>}
      {comments}
    </section>
  );
};

export default Comments;
