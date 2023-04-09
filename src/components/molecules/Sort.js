import Label from "../atoms/Label";
import Input from "../atoms/Input";
import "./styles.css";

const Sort = ({ handleSort, sortValue }) => {
  const options = [
    { value: "name", label: "Name" },
    { value: "status", label: "Status" },
    { value: "gender", label: "Gender" },
    { value: "species", label: "Species" },
  ];

  const radioButtons = options.map((option) => (
    <div className="input-field" key={option.value}>
      <Input
        type="radio"
        id={option.value}
        value={option.value}
        name="sort"
        checked={sortValue === option.value}
        onChange={handleSort}
      />
      <Label htmlFor={option.value} text={option.label} />
    </div>
  ));

  return (
    <div className="sort-box">
      <Label htmlFor={"sort"} text="Sort by:" className="sort-label" />
      <div className="sort-container">{radioButtons}</div>
    </div>
  );
};

export default Sort;
