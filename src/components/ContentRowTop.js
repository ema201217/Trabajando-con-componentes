import React from "react";
import ContentRowMovies from './ContentRowMovies';
import { GenresInDb } from "./GenresInDb";
import { LastMovieInDb } from "./LastMovieInDb";

function ContentRowTop() {
  
  const db = [
    {
      title: "Movies in Data Base",
      amount: 21,
      icon: "fa-film",
      border: "border-left-primary",
      textColor:"text-primary"
    },
    {
      title: "Total awards",
      amount: 79,
      icon: "fa-award",
      border: "border-left-success",
      textColor:"text-success"
    },
    {
      title: "Actors quantity",
      amount: 49,
      icon: "fa-user",
      border: "border-left-warning",
      textColor:"text-warning"
    },
  ];
  
  const genres = [
    "Acción",
    "Animación",
    "Aventura",
    "Ciencia Ficción",
    "Comedia",
    "Documental",
    "Drama",
    "Fantasia",
    "Infantiles",
    "Musical"]

  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <ContentRowMovies db={db}/>
        {/*<!-- End movies in Data Base -->*/}

        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <LastMovieInDb/>
          {/*<!-- End content row last movie in Data Base -->*/}

          {/*<!-- Genres in DB -->*/}
          <GenresInDb genres={genres}/>
        </div>
      </div>
      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
