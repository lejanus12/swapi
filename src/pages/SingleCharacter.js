import React from "react";
import Loading from "../components/Loading";
import Loading2 from "../components/Loading2";
import { useFetch } from "../components/useFetch";
import { useParams } from "react-router-dom";
const urlPeople = "http://swapi.dev/api/people/?search=";

const SingleCharacter = () => {
  const { id } = useParams();
  const { items, loading } = useFetch(`${urlPeople}${id}`);
  const char = items.results;

  if (loading) {
    return <Loading />;
  }
  if (char.length === 0) {
    return <h2 className="section-title">no character with this name</h2>;
  }

  const character = char[0];
  return (
    <section className="section character-section">
      <a href="/" className="btn btn-primary">
        back home
      </a>
      <h2 className="section-title">{character.name} </h2>
      <div className="drink">
        <div className="drink-info">
          <p>
            <span className="drink-data">height: </span>
            {character.height}
          </p>{" "}
          <p>
            <span className="drink-data">mass: </span>
            {character.mass}
          </p>{" "}
          <p>
            <span className="drink-data">birth year: </span>
            {character.birth_year}
          </p>{" "}
          <p>
            <span className="drink-data">gender: </span>
            {character.gender}
          </p>{" "}
          <p>
            <span className="drink-data">hair color: </span>
            {character.hair_color}
          </p>{" "}
          <p>
            <span className="drink-data">skin color: </span>
            {character.skin_color}
          </p>
        </div>
      </div>

      {character.films.map((film, index) => (
        <Films key={index} film={film} index={index} />
      ))}
    </section>
  );
};

const Films = ({ film, index }) => {
  const { items, loading } = useFetch(`${film}`);
  const title = items.title;

  if (loading) {
    return <Loading2 />;
  } else {
    return (
      <div className="drink">
        <p>
          <span className="drink-data"> film {index + 1} </span>
          {title}
        </p>
      </div>
    );
  }
};

export default SingleCharacter;
