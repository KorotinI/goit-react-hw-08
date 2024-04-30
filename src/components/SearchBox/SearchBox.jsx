import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";

function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilter);

  const searchFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchWrap}>
      <p className={css.searchTitle}>Find contacts by name or number</p>
      <input
        className={css.searchInput}
        type="text"
        value={filter}
        onChange={searchFilter}
      />
    </div>
  );
}

export default SearchBox;