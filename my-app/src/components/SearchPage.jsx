import React, {useEffect, useState} from 'react';
import getResponse from '../functions/getResponse.js';
import { useQuery } from 'react-query';
import { useSearchContext } from '../context/SearchContext.jsx';
import { useFavoritesContext } from '../context/FavoritesContext.jsx';
import ResponseDisplay from "../components/ResponseDisplay.jsx"
import '../index.css';




// const baseUrl = "https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&limit=25";
// const url = "https://api.giphy.com/v1/gifs/search?api_key=QLjcxO7Hoya1ek7UtqSc0FH0wabj5zVD&q=&limit=25&offset=0&rating=g&lang=en"

const SearchPage = () => {
  // This hook uses state management AND hooks
  const [searchType, setSearchType] = useState('pokemon/');
  const [searchTerm, setSearchTerm] = useState('');
  const [url, setUrl] = useState(null);
  const { searchResults, setSearchResults } = useSearchContext();
  const {favorites, addFavorite, removeFavorite } = useFavoritesContext();

  const baseUrl = `https://pokeapi.co/api/v2/`;

  useEffect(() => {
    console.log(url);
  }, [url])

const { isLoading, error, isSuccess } = useQuery(["getResponse", url], ()  => getResponse(url), {
  enabled: !!url,

  onSuccess: (data) => setSearchResults(data),
})

  return (
    <div class="search-container">
    <h1>Search Page</h1>
    <form>
    <label>Search for Everything Pokemon</label> <br />
    <select data-testid = "searchType"
  value= {searchType}
  onChange={(e) => setSearchType(e.target.value)}
  >
    <option value='pokemon/'>Pokemon</option>
    <option value='type/'>Type</option>
    <option value='ability/'>Ability</option>
    <option value='item/'>Items</option>
    <option value='move/'>Moves</option>
    <option value='location/'>Locations</option>
    <option value='pokemon-species/'>Pokemon-Species</option>
  </select>
    <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Gyarados"
  />
 
  <button 
  disabled={!searchTerm.length}
  onClick={(e) => {
    e.preventDefault();
    if(searchTerm.length >= 1 ) {
      setUrl(`${searchType}${searchTerm.toLowerCase()}/`);
      console.log(url);
    }
    }}
    >
  Search</button>
    </form>
    {isLoading && <p>Loading...</p>}
    {error && <p>An error has occured: {error.message}</p>}
    {isSuccess && 
    /* searchType == 'pokemon' && */
      <ResponseDisplay
      name={searchTerm}
      {...searchResults}
      addFavorite={() => addFavorite(searchResults)}
      removeFavorite={removeFavorite}
      isFavorite={favorites.some((fav) => fav.pokemon === searchResults.pokemon)}
      />
    }
    {/* {isSuccess && searchType == 'pokemon-species' &&
      <ResponseDisplay1/>
    } */}
 </div>
  )

}
export default SearchPage;

