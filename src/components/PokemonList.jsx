import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  return (
    <div className="container">
      <div className="card">
        {props.pokemons.map((pokemon) => {
          return (
            <div>
              <Pokemon
                key={pokemon.id}
                name={pokemon.name}
                img={pokemon.img}
                type={pokemon.type}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
