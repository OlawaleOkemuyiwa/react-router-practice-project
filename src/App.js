import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Layout>
        <Routes>
          <Route path="/quotes" element={} />
          <Route path="/quotes/:quoteId" element={} />
          <Route path="/new-quote" element />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;


//for multi-page SPA using Router. The best approach is to first identify the pages one wish to have and the path to those pages. Then Route components with those specified paths are written out with no element prop yet. A pages folder is created, in there we have special components that should be loaded by those Routes by passing such components to the element prop of the written Route components.