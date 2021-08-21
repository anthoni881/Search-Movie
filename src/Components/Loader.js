import React, { useEffect } from "react";
import "../Css/Loader.css";
import ImgLoader from "../Assets/loader.gif";

const Loader = ({ isLoading }) => {
  useEffect(() => {
    isLoading
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isLoading]);
  return (
    <React.Fragment>
      {isLoading && (
        <div className="container-loader">
          <div className="content-loader">
            <img src={ImgLoader} alt="img" />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Loader;
