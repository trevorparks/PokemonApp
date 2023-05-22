

const ResponseDisplay = ({ url, pokemon, pokemon_forms, pokemon_game_indices, pokemon_moves, pokemon_species, addFavorite, removeFavorite, isFavorite }) => {
    
    return (
        <div>
            <h4>
                {pokemon}
            </h4>
            <a href={url} alt={pokemon} title={pokemon} />
            { !isFavorite &&(<button onClick={() => addFavorite(pokemon, pokemon_forms, pokemon_game_indices, pokemon_moves, pokemon_species)}>
                Add Favorite
            </button>)}
            { isFavorite && (<button onClick={() => removeFavorite(pokemon, pokemon_forms, pokemon_game_indices, pokemon_moves, pokemon_species)}>
                Remove Favorite
            </button>) }
        </div>
    )
}

export default ResponseDisplay;