import { ICharctersObject } from "../../interfaces/interfaces";

const CardCharacter = ({ character }: ICharctersObject) => {
  return (
    <div>
      <h2>{character.name}</h2>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <p>{character.description}</p>
    </div>
  );
};

export default CardCharacter;
