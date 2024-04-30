import { Link } from "react-router-dom";
import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={css.container}>
      <h1>Page you visited doesn&apos;t exist</h1>
      <Link className={css.link} to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;