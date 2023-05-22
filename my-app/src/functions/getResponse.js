// VCNNSNKJJ37U89F1HTV67R5Y5GG4UU6IV8
const baseURL = `https://pokeapi.co/api/v2/`;

export default async function getResponse(searchString) {
    const response = await fetch(baseURL + searchString);
    
    if(!response.ok) {
        throw new Error(`HTTP error! status ${response.status}`)
    }
    const data = await response.json();
    const pokemon = data.data;
    return pokemon.map((val) => ({
        pokemon: val.abilities,
        pokemon_forms: val.forms,
        pokemon_game_indices: val.game_indices,
        pokemon_moves: val.moves,
        pokemon_species: val.species,
        pokemon_sprites: val.sprites,
        pokemon_stats: val.stats,
        pokemon_types: val.types,

    }))
}

//pokemon/ = stats about specific abilities, moves, etc
//pokemon-species = base happiness, capture rate, color, eggs, evolution chain, description, etc
// type information i.e. flying
// ability information
//berries, contest, encounters, evolution, games, items, locations, machines, moves, pokemon