import Type from "./Type";

const Pokemon = (props) => {
  return (
    <div className="pokemon">
      <img classname="pokemonCard" src={props.img} alt="pokemon" />
      <h1>{props.name}</h1>

      {props.type.map((type) => {
        return (
          <div className="type">
            <Type key={type} type={type} />
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;
