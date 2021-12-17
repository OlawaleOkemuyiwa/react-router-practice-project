import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm"


const NewQuote = () => {
  const navigate = useNavigate();

  const addQuoteHandler = quoteData => {
    console.log(quoteData);
    
    navigate('/quotes', { replace: true })
  }

  return (
    <QuoteForm retrieveEnteredData={addQuoteHandler}/>
  )
}

export default NewQuote