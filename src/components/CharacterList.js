import React, { useState, useRef, useEffect } from "react";
import Character from "./Character";
import Loading from "./Loading";
import { useFetch } from "./useFetch";
const urlPeople = "http://swapi.dev/api/people/?search=";

const CharacterList = ({ searchTerm }) => {
  const { loading, items } = useFetch(`${urlPeople}${searchTerm}`);
  const characters = items.results;

  if (loading) {
    return <Loading />;
  }
  if (characters.length === 0) {
    return <h2 className="section-title">page not loading</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">List of characters</h2>
      <div className="characters-center">
        {characters.map((character) => (
          <Character key={character.name} {...character} />
        ))}
      </div>
    </section>
  );
};

export default CharacterList;
