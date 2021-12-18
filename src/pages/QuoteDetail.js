import { Fragment } from "react";
import { Outlet, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Wale', text: 'Learning React is fun!'},
  { id: 'q2', author: 'Seun', text: 'Learning React is great!'}
]

const QuoteDetail = () => {
  const { quoteId } = useParams();  //to get concrete values of dynamic path segments e.g "domain/welcome/:someId"

  const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId);

  if (!quote) {
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Outlet />                    {/* one of the nested components (only one can be loaded at once) whose specified route's path matches the URL is loaded and inserted here*/}
    </Fragment>
  )
}

export default QuoteDetail;