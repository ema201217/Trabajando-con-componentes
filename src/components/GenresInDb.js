import React from "react";
import PropTypes from "prop-types";

export const GenresInDb = ({ genres }) => {
  return (
    <div>
      {/*<!-- Genres in DB -->*/}
        {genres !== [] && (
      <div className="col-lg-10 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Genres in Data Base
              </h5>
            </div>
            <div className="card-body">
              <div className="row row-lg-12">
                {genres.map((genre, index) => (
                  <div className="col-lg-6 mb-4" key={index}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{genre}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
        )}
    </div>
  );
};

GenresInDb.propTypes = {
  genres: PropTypes.array.isRequired,
};
GenresInDb.defaultProps = {
  genres: [],
};
