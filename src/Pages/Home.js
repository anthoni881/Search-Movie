import React from "react";
import "../Css/Home.css";
import { useMovie } from "../Hooks/useMovie";
import Modal from "../Components/Modal";
import { useHistory } from "react-router-dom";

const Home = () => {
  const {
    list,
    setTitle,
    handleSearch,
    handlePoster,
    posterDetail,
    modal,
    setModal,
    lastElementRef,
  } = useMovie();
  const history = useHistory();

  return (
    <div className="home">
      <p style={{ fontSize: "24px" }}>Find Your Favorite Movie Here!!!</p>
      <input
        type="text"
        name="search"
        placeholder="Search Movie Title..."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        className="button-search"
        onClick={handleSearch}
        data-cy="button-search"
      >
        Search
      </button>
      <div className="list-wrapper" data-cy="list-wrapper">
        {list.map((data) => (
          <div ref={lastElementRef} className="card-container">
            <img
              data-cy="poster-img"
              className="poster"
              src={data.Poster}
              alt="img"
              onClick={() => handlePoster(data.Poster)}
            />
            <button
              data-cy="detail-btn"
              className="button-detail"
              onClick={() => history.push(`/detail/${data.imdbID}`)}
            >
              Detail
            </button>
          </div>
        ))}
      </div>
      {modal ? (
        <Modal poster={posterDetail} close={() => setModal(false)} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
