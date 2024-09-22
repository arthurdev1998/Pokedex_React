import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import searchPokemon from './services/api'

function App() {
  const onSearchHandler = async (pokemon) =>{
    const result = await searchPokemon(pokemon);
    console.log("pokemon chapado", result);
  }
  return (
    <div className="App">

      <NavBar/>
      <SearchBar
        onSearch={onSearchHandler}
      />
    </div>
  );
}

export default App;
