import { Navigate, Route, Routes, Link } from "react-router-dom";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes"/>}/>
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
          <Route path="" element={                                    //the path here is relative to the parent route's path and since the element should be displayed when the URL is that of the parent's, it is left just that way
            <div className="centered">
              <Link to="comments" className="btn btn--flat">Load Comments</Link>
            </div>
          }/>
          <Route path="comments" element={<Comments />}/>
        </Route>
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />}/>                      {/*matches all|any URL. Should be placed last inside Routes. It is used as a fallback for when none of the above routes matches the current URL*/}
      </Routes>
    </Layout>
  );
}

export default App;


//for multi-page SPA using Router. The best approach is to first identify the pages one wish to have and the path to those pages. Then Route components with those specified paths are written out with no element prop yet. A pages folder is created, in there we have special components that should be loaded by those Routes by passing such components to the element prop of the written Route components. Place holder markups are returned from the special components to confirm they're loaded correctly by Route and after which such placeholder markups are replaced by actual contents of the components