import { Fragment } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
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
      <div className="centered">
        <Link className="btn btn--flat" to="comments">Load Comments</Link>
      </div>
      <Outlet />              {/*the nested Comments component is loaded and inserted here whenever the present URL matches its specfied Route path*/}
    </Fragment>
  )
}

export default QuoteDetail;