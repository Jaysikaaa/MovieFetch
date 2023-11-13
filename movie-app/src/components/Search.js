import React from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <section className="search-section">
      <h2>Search your favourite Movies</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Enter movie name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
      </form>
      <div className="card-error">
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>
  );
};

export default Search;
