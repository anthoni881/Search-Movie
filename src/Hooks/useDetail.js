import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../Providers/useAppContext";

export const useMovieDetail = () => {
  const [detail, setDetail] = useState({});
  const queryString = useParams();
  const { dispatch } = useAppContext();

  const movieDetail = (movieKey) => {
    dispatch({
      type: "LOADER",
      payload: true,
    });
    try {
      axios
        .get(`http://www.omdbapi.com/?apikey=fd0ce476&i=${movieKey}`)
        .then((res) => {
          setDetail(res.data);
          dispatch({
            type: "LOADER",
            payload: false,
          });
        });
    } catch (err) {
      return err;
    }
  };
  useEffect(() => {
    movieDetail(queryString.movieId);
  }, [queryString.movieId]);
  return { detail };
};
