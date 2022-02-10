const ListItem = ({ character }) => {
  return (
    <div>
      <h3 className="dsds">{character.name}</h3>
      <p>{character.description}</p>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt="super heroes"
      ></img>
      <button>More Info...</button>
    </div>
  );
};

export default ListItem;
