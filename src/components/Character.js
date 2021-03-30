import React from "react";
import { Link } from "react-router-dom";
export default function Character({ name, birth_year, gender }) {
  return (
    <article className="character">
      <div className="character-footer">
        <h3>{name}</h3>
        <h4>{gender}</h4>
        <p>{birth_year}</p>
        <Link to={`/character/${name}`} className="btn btn-primary">
          details
        </Link>
      </div>
    </article>
  );
}
