import { useEffect, useRef } from 'react';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './NewCommentForm.module.css';

const NewCommentForm = props => {
  const commentTextRef = useRef(null);
  const { sendRequest, status, error } = useHttp(addComment);

  const { quoteId, notifyParentAfterAddingComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      notifyParentAfterAddingComment();
    }
  }, [status, error, notifyParentAfterAddingComment])

  const submitFormHandler = event => {
    event.preventDefault();
    const enteredText = commentTextRef.current.value;

    //CCC optional: Could validate here

    sendRequest({
      commentData: { text: enteredText }, 
      quoteId
    })
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status=== 'pending' && (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
