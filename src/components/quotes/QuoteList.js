import { Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = props => {
  const navigate = useNavigate();     //useNavigate helps to programatically navigate and change the URL 
  const location = useLocation();     //useLocation provides access to a location object which has info about the currently loaded URL(hash, pathname, search etc)
  
  const queryParams = new URLSearchParams(location.search)   //URLSearchParams is a JS func constructor that helps to extract data from query/searh parameters
  
  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    //navigate(`${location.pathname}?sort=${isSortingAscending ? 'desc' : 'asc'}`);
    navigate({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`   //the '?' is optional as it would be automactically inserted if not put
    })
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button 
          onClick={changeSortingHandler}
        >Sort {isSortingAscending ? 'Descending': 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map(quote => (
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
