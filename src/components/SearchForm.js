import React, { useRef, useState, useEffect } from "react";
import CharacterList from "./CharacterList";
const urlPeople = "http://swapi.dev/api/people/?search=";

const SearchForm = () => {
  const searchValue = useRef("");
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState(`&page=${1 + page}`);

  //auto select of search box at loading
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCharacter() {
    setSearchTerm(searchValue.current.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="section search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">search for Star Wars characters</label>
            <input
              type="text"
              name="name"
              id="name"
              ref={searchValue}
              onChange={searchCharacter}
            />
          </div>
        </form>
      </section>

      <CharacterList searchTerm={searchTerm} />

      <section className="section">
        <div className="characters-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              setPage((page + 8) % 9);
              setSearchTerm(`&page=${1 + page}`);
            }}
          >
            Load previous page
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setPage((page + 1) % 9);
              setSearchTerm(`&page=${1 + page}`);
            }}
          >
            Load next page
          </button>
        </div>
      </section>
    </>
  );
};

export default SearchForm;
