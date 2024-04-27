import { useDispatch, useSelector } from "react-redux";
import style from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/contactsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    dispatch(changeFilter(searchTerm));
  };

  return (
    <>
      <p className={style.searchText}>Find contacts by name </p>
      <input
        type="text"
        name="search"
        required
        autoFocus
        onChange={handleChange}
        value={value}
        className={style.searchInput}
      />
    </>
  );
};
export default SearchBox;
