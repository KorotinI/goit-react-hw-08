import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homeContainer}>
      <h1>Welcome to your PhoneBook app👋</h1>
      <h2>Nice to see you here😍</h2>
      <div className={css.homeParagraf}>
        <p>Register to be able to use all the advantages of the application!</p>
        <Link className={css.link} to="/register">
          Register
        </Link>
      </div>
      <div className={css.homeParagraf}>
        <p>Already registered?</p>
        <Link className={css.link} to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;