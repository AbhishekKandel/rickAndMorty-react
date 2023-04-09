import React, { useContext, Suspense } from "react";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../context/Context";

const Image = React.lazy(() => import("../atoms/Image"));

const Card = ({ character }) => {
  const { toggleFavorite, isFavorite } = useContext(Context);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    toggleFavorite(character);
  };

  return (
    <>
      <div className="character-card">
        <Suspense fallback={<div>Loading images...</div>}>
          <Image url={character.image} imageName={character.name} />
        </Suspense>
        <Heading text={character.name} />
        <br />
        <div className="status-species">
          <Text text={character.status} />
          <pre> - </pre>
          <Text text={character.species} />
        </div>
        <br />
        <p className="location">{"Last known location:"} </p>
        <Text text={character.location.name} />
        <div className="favorite" onClick={handleFavoriteClick}>
          <FontAwesomeIcon
            icon={faStar}
            color={isFavorite(character) ? "lightgreen" : "gray"}
          />
        </div>
      </div>
    </>
  );
};

export default Card;

// function CharacterCard({ character }) {
//   const history = useHistory();

//   const handleCardClick = () => {
//     history.push(`/character/${character.id}`);
//   };

//   return (
//     <div onClick={handleCardClick}>
//       <Card character={character} />
//     </div>
//   );
// }
