import React from "react";
import { useMovieDetail } from "../Hooks/useDetail";
import { useHistory } from "react-router-dom";
import Star from "../Assets/star.png";
import "../Css/Detail.css";

const Detail = () => {
  const { detail } = useMovieDetail();
  const history = useHistory();

  return (
    <div className="container-detail">
      <img
        className="img-poster"
        src={detail.Poster}
        alt="img"
        data-cy="poster-detail"
      />
      <div style={{ width: "30%", margin: "0 0 0 24px" }}>
        <div className="title-rating">
          <p data-cy="title-year">
            {detail.Title}({detail.Year})
          </p>
          <div className="rating-wrapper">
            <p data-cy="rating-detail">{detail.imdbRating}</p>
            <img className="star" src={Star} alt="img" />
          </div>
        </div>
        <div data-cy="detail-genre"> Genre : {detail.Genre}</div>
        <div data-cy="detail-actors"> Actors : {detail.Actors}</div>
        <div data-cy="detail-language"> Language : {detail.Language}</div>
        <div data-cy="detail-type"> Type : {detail.Type}</div>
        <div data-cy="detail-director"> Director : {detail.Director}</div>
        <div data-cy="detail-country"> Country : {detail.Country}</div>
        <span style={{ margin: "0 0 32px 0" }} data-cy="detail-runtime">
          Runtime : {detail.Runtime}
        </span>
        <p data-cy="detail-plot">{detail.Plot}</p>
        <button
          className="button-back"
          onClick={() => history.push(`/`)}
          data-cy="button-back-home"
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};
export default Detail;
