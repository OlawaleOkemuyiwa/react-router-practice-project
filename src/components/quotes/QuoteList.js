import { Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = props => {
  const navigate = useNavigate(); //useNavigate helps to programatically navigate and change the URL 
  const location = useLocation(); //useLocation provides access to a location object which has info about the currently loaded URL(hash, pathname, search etc)
  console.log(location)

  const queryParam = new URLSearchParams(location.search)  //URLSearchParams is a JS func constructor that helps to extract data from query/searh parameters
  const isSortingAscending = queryParam.get('sort') === 'asc';

  const changeSortingHandler = () => {
    navigate('/quotes?sort=asc');
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort Ascending</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
