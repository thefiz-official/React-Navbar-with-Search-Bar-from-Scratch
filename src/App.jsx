import "./App.css";
import Navbar from "./component/Navbar";
import Blog from "./component/pages/Blog";
import Home from "./component/pages/Home";
import Search from "./component/pages/Search";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const callFromNavbar = (value) => {
    setSearchQuery(value);
  };

  const navigate = useNavigate();
  const searchPage = () => {
    navigate(`/search`);
  };

  return (
    <div>
      <Navbar queryData={callFromNavbar} searchBox={searchPage} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/search" element={<Search search={searchQuery} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
