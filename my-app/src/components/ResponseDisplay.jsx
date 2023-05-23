

const ResponseDisplay = ({ name, abilities, forms, game_indices, moves, species, sprites, stats, types, addFavorite, removeFavorite, isFavorite }) => {
    console.log(name);
    return (
        <div>
            <h4>
               Name: {name}
            </h4>
            <h4>
                Abilities: {abilities.map(item => <li>{item.ability.name}</li>)}
            </h4>
            <h4>
                Forms: {forms.map(item => <li>{item.name}</li>)}
            </h4>
            <h4>
                Moves: {moves.map(item => <li>{item.move.name}</li>)}
            </h4>
            <h4>
                Species: {<li>{species.name}</li>}
            </h4>
            <h4>
               Game Indices: {game_indices.map(item => <li>{item.version.name}</li>)} 
            </h4>
            <h4>
                Sprites: {<img src={sprites.front_default}></img>}
            </h4>
            <h4>
                Stats: {stats.map(item => <li>{item.stat.name} : {item.base_stat}</li>)}
            </h4>
            <h4>
                Types: {types.map(item => <li>{item.type.name}</li>)}
            </h4>
            { !isFavorite &&(<button onClick={() => addFavorite()}>
                Add Favorite
            </button>)}
            { isFavorite && (<button onClick={() => removeFavorite()}>
                Remove Favorite
            </button>) }
        </div>
    )
}

export default ResponseDisplay;