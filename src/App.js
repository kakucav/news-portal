import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import SearchResults from "./pages/SearchResults";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/article/:page/:index" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
