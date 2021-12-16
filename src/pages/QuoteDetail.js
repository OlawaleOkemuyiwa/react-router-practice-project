import { Fragment } from "react";
import { Outlet, useParams } from "react-router-dom";


const QuoteDetail = () => {
  const { quoteId } = useParams();

  return (
    <Fragment>
      <h1>Quote detail page</h1>
      <p>{quoteId}</p>
      <Outlet />
    </Fragment>
  )
}

export default QuoteDetail;