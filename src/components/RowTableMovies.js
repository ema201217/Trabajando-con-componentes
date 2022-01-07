import React from "react";
import PropTypes from 'prop-types'

export const RowTableMovies = ({ data }) => {
  return (
    <tbody>
      {data.map(({ title, length, rating, genres, awards }, index) => (
        <tr key={index}>
          <td>{title}</td>
          <td>{length}</td>
          <td>{rating}</td>
          <td>
            <ul>
              {genres.map((genre, i) => (
                <li key={i}>{genre}</li>
              ))}
            </ul>
          </td>
          <td>{awards}</td>
        </tr>
      ))}
    </tbody>
  );
};

RowTableMovies.propTypes = {
  data:PropTypes.array.isRequired
}
RowTableMovies.defaultProps = {
  data:[{
    title:"-",
     length:"-", 
     rating:"-", 
     genres:[], 
     awards:"-"
  }]
}