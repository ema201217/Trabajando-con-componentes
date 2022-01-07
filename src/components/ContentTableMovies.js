import React from "react";
import { RowTableMovies } from "./RowTableMovies";

export const ContentTableMovies = () => {
  const data = [
    {
      title: "Billy Elliot",
      length: 123,
      rating: 5,
      genres: ["Drama", "Comedia"],
      awards: 2,
    },
    {
      title: "Alicia en el país de las maravillas",
      length: 142,
      rating: 4.8,
      genres: ["Drama", "Acción", "Comedia"],
      awards: 3,
    },
  ];
  return (
    <div className="m-2">
      <table className="table bg-white table-bordered col-lg-10">
        <thead>
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Duración</th>
            <th scope="col">Rating</th>
            <th scope="col">Género</th>
            <th scope="col">Premios</th>
          </tr>
        </thead>
        <RowTableMovies data={data} />
        <thead>
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Duración</th>
            <th scope="col">Rating</th>
            <th scope="col">Género</th>
            <th scope="col">Premios</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
