import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homeContainer}>
      <h1>HOME PAGE</h1>
      <p>Make a short registration</p>
    </div>
  );
};

export default HomePage;