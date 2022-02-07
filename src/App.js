import SearchForm from "./components/SearchForm";
import PokemonList from "./components/PokemonList";
import pokemons from "./pokedex.json";
import "./App.css";

function App() {
  const first50el = pokemons.pokemon.slice(0, 50);
  console.log(first50el);
  return (
    <div className="App">
      <SearchForm />
      <PokemonList pokemons={first50el} />
    </div>
  );
}

export default App;
