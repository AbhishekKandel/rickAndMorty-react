import Input from "../atoms/Input";
import Label from "../atoms/Label";

const Search = ({ handleChange, query, placeholder }) => {
  return (
    <div className="search-container">
      <Label htmlFor={"search"} text="Search: " />
      <Input
        type="text"
        id="search"
        handleChange={handleChange}
        placeholder={placeholder}
        value={query}
      />
    </div>
  );
};

export default Search;
