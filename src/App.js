import { Navigate, Route, Routes } from "react-router-dom";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes"/>}/>
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
          <Route path="comments" element={<Comments />}/>
        </Route>
        <Route path="/new-quote" element={<NewQuote />} />
      </Routes>
    </Layout>
  );
}

export default App;


//for multi-page SPA using Router. The best approach is to first identify the pages one wish to have and the path to those pages. Then Route components with those specified paths are written out with no element prop yet. A pages folder is created, in there we have special components that should be loaded by those Routes by passing such components to the element prop of the written Route components. Place holder markups are returned from the special components to confirm they're loaded correctly by Route and after which such placeholder markups are replaced by actual contents of the components