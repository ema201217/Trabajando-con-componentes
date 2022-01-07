import React from "react";
import PropTypes from "prop-types";

const ContentRowMovies = ({ db }) => {
  return (
    <div className="row">
      {/*<!-- Content Row Movies-->*/}
      {db.map(({ border, icon, textColor, amount, title }, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className={`card shadow h-100 py-2 ${border}`}>
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div
                    className={`text-xs font-weight-bold text-uppercase mb-1 ${textColor}`}
                  >
                    {title}
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {amount}
                  </div>
                </div>
                <div className="col-auto">
                  <i className={`fas fa-2x text-gray-300 ${icon}`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/*<!-- End movies in Data Base -->*/}
    </div>
  );
};

ContentRowMovies.propTypes = {
  db: PropTypes.array.isRequired
}
ContentRowMovies.defaultProps = {
  db: [
    {
        title: "the best movies are here",
        amount: "",
        icon: "fa-check",
        border: "border-left-success",
        textColor:"text-success"
      },
  ]
};

export default ContentRowMovies;
