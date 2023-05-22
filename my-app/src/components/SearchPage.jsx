import React, {useState} from 'react';
import getResponse from '../functions/getResponse.js';
import { useQuery } from 'react-query';
import { useSearchContext } from '../context/SearchContext.jsx';
import { useFavoritesContext } from '../context/FavoritesContext.jsx';
import ResponseDisplay from "../components/ResponseDisplay.jsx"



// const baseUrl = "https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&limit=25";
// const url = "https://api.giphy.com/v1/gifs/search?api_key=QLjcxO7Hoya1ek7UtqSc0FH0wabj5zVD&q=&limit=25&offset=0&rating=g&lang=en"

const SearchPage = () => {
  // This hook uses state management AND hooks
  const [searchType, setSearchType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [url, setUrl] = useState(null);
  const { searchResults, setSearchResults } = useSearchContext();
  const {favorites, addFavorite, removeFavorite } = useFavoritesContext();



  const baseUrl = `https://pokeapi.co/api/v2/`;

const { isLoading, error, isSuccess } = useQuery(["getResponse", url], ()  => getResponse(url), {
  enabled: !!url,

  onSuccess: (data) => setSearchResults(data),
})

  return (
    <div>
    <h1>Search Page</h1>
    <form>
    <label>Search for Everything Pokemon</label>
    <select data-testid = "searchType"
  value= {searchType}
  onChange={(e) => setSearchType(e.target.value)}
  >
    <option value='pokemon-species/'>Pokemon</option>
    <option value='type/'>Type</option>
    <option value='ability/'>Ability</option>
    <option value='item/'>Items</option>
    <option value='move/'>Moves</option>
    <option value='location/'>Locations</option>
  </select>
    <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Gyarados"
  />
 
  <button 
  disabled={searchTerm.length}
  onClick={(e) => {
    e.preventDefault();
    if(searchTerm.length >= 1 ) {
      setUrl(`${searchType}${searchTerm}/`);
    }
    }}
    >
  Search</button>
    </form>
    {isLoading && <p>Loading...</p>}
    {error && <p>An error has occured: {error.message}</p>}
    {isSuccess && 
    searchResults.map((val) => (
      <ResponseDisplay 
      key={val.gif_id}
      {...val}
      // url={val.url}
      // title={val.title}
      // gif_id={val.gif_id}
      addFavorite={() => addFavorite( { pokemon: val.abilities,
        pokemon_forms: val.forms,
        pokemon_game_indices: val.game_indices,
        pokemon_moves: val.moves,
        pokemon_species: val.species,
        pokemon_sprites: val.sprites,
        pokemon_stats: val.stats,
        pokemon_types: val.types,} )}
      removeFavorite={removeFavorite}
      isFavorite={favorites.some((fav) => fav.pokemon === val.pokemon)}
      />
    ))
    }


 </div>
  )

}
export default SearchPage;
