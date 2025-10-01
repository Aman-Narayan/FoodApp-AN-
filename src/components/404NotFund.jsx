import HeadingComponent from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <HeadingComponent />
      <div className="not-found-container">
        <div className="plate-wrapper">
          <div className="plate">
            <div className="eye-orange"></div>
            <div className="eye-green"></div>
            <div className="mouth-chilli"></div>
          </div>

          <div className="fork-handle-wrapper">
            <div className="fork-tine"></div>
          </div>
          <div className="spoon-handle"></div>
        </div>

        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-description">
          Uh-oh! Looks like the page you are trying to access doesn't exist.
          Please start afresh.
        </p>

        <Link to="/">
          <button className="go-home-button">GO HOME</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
