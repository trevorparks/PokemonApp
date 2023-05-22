// VCNNSNKJJ37U89F1HTV67R5Y5GG4UU6IV8
const baseURL = `https://pokeapi.co/api/v2/`;

export default async function getResponse(searchString) {
    const response = await fetch(baseURL + searchString);
    console.log(baseURL + searchString);
    
    if(!response.ok) {
        throw new Error(`HTTP error! status ${response.status}`)
    }
    const data = await response.json();

    return data.map((val) => ({
        abilities: val.abilities,
        forms: val.forms,
        game_indices: val.game_indices,
        moves: val.moves,
        species: val.species,
        sprites: val.sprites,
        stats: val.stats,
        types: val.types
    })
    );
}

//pokemon/ = stats about specific abilities, moves, etc
//pokemon-species = base happiness, capture rate, color, eggs, evolution chain, description, etc
// type information i.e. flying
// ability information
//berries, contest, encounters, evolution, games, items, locations, machines, moves, pokemon