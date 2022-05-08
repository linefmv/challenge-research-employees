import { SearchInput } from "./styles";

const SearchBar = ({ value, onInput }) => {
  return (
    <SearchInput
      placeholder="Procure seu funcionário"
      value={value}
      onInput={onInput}
    />
  );
};

export default SearchBar;
