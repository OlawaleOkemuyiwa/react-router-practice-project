import QuoteForm from "../components/quotes/QuoteForm"


const NewQuote = () => {

  const addQuoteHandler = quoteData => {
    console.log(quoteData);
  }

  return (
    <QuoteForm retrieveEnteredData={addQuoteHandler}/>
  )
}

export default NewQuote