import "./Search.scss";
import debounce from "lodash.debounce";

export const Search = ({ onSearch }) => {
  const debouncedOnSearch = debounce(onSearch, 400);

  return (
    <label className="search">
      <img src="./assets/search.svg" alt="search" />
      <input
        type="search"
        className="search__input"
        placeholder="Search"
        onChange={(e) => debouncedOnSearch(e.target.value)}
      />
    </label>
  );
};
