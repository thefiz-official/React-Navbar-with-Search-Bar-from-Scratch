import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

//Create Navbar component
function Navbar({ queryData, searchBox }) {
  const [query, setQuery] = useState("");

  const onChangeFunction = (e) => setQuery(e.target.value);

  useEffect(() => {
    queryData(query);
  }, [query]);

  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            {/* Add a search box to the Navbar */}
            <input
              type="text"
              placeholder="Search a name..."
              value={query}
              onChange={onChangeFunction}
              onClick={searchBox}
            ></input>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
