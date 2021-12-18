import { useRef, useState } from 'react';


import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = props => {
  const [isEntering, setIsEntering] = useState(false);  //for the Prompt component
  console.log(isEntering);

  const authorInputRef = useRef();
  const textInputRef = useRef();
 

  const formFocusedHandler = () => {
    setIsEntering(true);
  }

  const finishEnteringHandler = () => {
    setIsEntering(false)
  }


  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.retrieveEnteredData({ author: enteredAuthor, text: enteredText });
  }

  return (
    /* This is a component used to prevent unwanted transistions/navigations. It automatically watches if we navigate away and if a certain condition is met, it will show a warning before it allows the user leave. It is mostly used when a form is dirty (user have unsaved changes) and the component or its equivalent is not yet available in Router 6
    <Prompt 
      when={isEntering}     //show this prompt when this is true only
      message={location => 'Are you sure you wanna leave? All your entered data will be lost'}    //we get location obj in message callback function which holds information about the page we're trying to navigae to, it allows us include the path we're trying to go to in this message shown
    />
    */
    <Card>
      <form className={classes.form} onFocus={formFocusedHandler} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' ref={authorInputRef} id='author' />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea rows='5' ref={textInputRef} id='text'></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn' onClick={finishEnteringHandler}>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;