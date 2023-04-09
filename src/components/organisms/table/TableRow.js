import { Link } from "react-router-dom";
import CharName from "../../api/GetCharByURL";

import { useState } from "react";
import Text from "../../atoms/Text";

const TableRow = ({ results }) => {
  const { id, name, air_date, episode, created, characters = [] } = results;
  const [showCharacters, setShowCharacters] = useState(false);

  const toggleShowCharacters = () => {
    setShowCharacters((prevState) => !prevState);
  };

  const totalCharacters = characters.length;

  return (
    <tr key={id}>
      <td>
        <Link key={id} to={`/episode/${id}`}>
          {name}
        </Link>
      </td>

      <td>{air_date}</td>
      <td>{episode}</td>
      <td>{created}</td>
      <td className="characters-cell">
        <div className="char-names">
          <CharName url={characters && characters[0]} />
          <span onClick={toggleShowCharacters}>
            {"...+ " + totalCharacters}{" "}
          </span>
          {showCharacters && (
            <div className="characters-popup">
              <div className="popup-header">
                <Text text={"Characters in " + name} />
                <button className="close-btn" onClick={toggleShowCharacters}>
                  &times;
                </button>
              </div>
              <div className="characters-list">
                {characters.map((character, index) => (
                  <div key={index + 1}>
                    <CharName url={character} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;


//how to make it configurable, discuss with yogesh
