import { useState } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = props => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  const onAddCommentHandler = () => {

  };
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm notifyParentAfterAddingComment={onAddCommentHandler}/>}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
