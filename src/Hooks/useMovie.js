import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppContext } from "../Providers/useAppContext";

export const useMovie = () => {
  const queryString = useParams();
  const history = useHistory();
  const { dispatch } = useAppContext();
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [posterDetail, setPosterDetail] = useState("");
  const [modal, setModal] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);

  const movieList = async (titleId, page) => {
    dispatch({
      type: "LOADER",
      payload: true,
    });
    try {
      const getData = await axios.get(
        `http://www.omdbapi.com/?apikey=fd0ce476&s=${titleId}&page=${page}`
      );
      dispatch({
        type: "LOADER",
        payload: false,
      });
      if (getData.data.Search) {
        await setList((prevData) => {
          return [...new Set([...prevData, ...getData.data.Search])];
        });
        setHasMore(getData.data.Search.length > 0);
      }
    } catch (err) {
      return err;
    }
  };

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevData) => prevData + 5);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  useEffect(() => {
    if (queryString.title) {
      setTitle(queryString.title);
      movieList(title, page);
    }
  }, [page]);

  const handlePoster = (poster) => {
    setPosterDetail(poster);
    setModal(true);
  };

  const handleSearch = () => {
    setList([]);
    setPage(1);
    movieList(title, page);
    history.push(`/${title}`);
  };

  return {
    list,
    setTitle,
    handleSearch,
    handlePoster,
    modal,
    posterDetail,
    setModal,
    lastElementRef,
  };
};
