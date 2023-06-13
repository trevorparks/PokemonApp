

const ResponseDisplay = ({ name, abilities, forms, game_indices, moves, species, sprites, stats, types, addFavorite, removeFavorite, isFavorite }) => {
    console.log(name);
    return (
       <div>
       <div class="response-display">
            <div className="pokeball-container">
            <h4 class="response-item pokeball-text">
               Name: <br /> {name}
            </h4>
            </div>
            <div className="pokeball-container">
            <h4 class="pokeball-text">
                Abilities: <br /> {abilities.map(item => <li>{item.ability.name}</li>)}
            </h4>
            </div>
            <div className="pokeball-container">
            <h4 class="pokeball-text">
                Forms: <br /> {forms.map(item => <li>{item.name}</li>)}
            </h4>
            </div>
            <div className="pokeball-container">
            <h4 class="pokeball-text response-item">
                Moves: <br /> {moves.map(item => <li>{item.move.name}</li>)}
            </h4>
            </div>
            <div className="pokeball-container">
            <h4  class="pokeball-text">
                Species: <br /> {<li>{species.name}</li>}
            </h4>
            </div>
            <div className="pokeball-container">
            <h4 class="response-item pokeball-text">
               Game Indices: <br /> {game_indices.map(item => <li>{item.version.name}</li>)} 
            </h4>
            </div>
            <div className="pokeball-container">
            <h4 class="sprite pokeball-text">
                Sprites: <br /> {<img src={sprites.front_default} style={{ width: "400px", height: "400px" }}></img>}
            </h4>
            </div>
            <div className="pokeball-container">
            <h4 class="response-item pokeball-text">
                Stats: <br /> {stats.map(item => <li>{item.stat.name} : {item.base_stat}</li>)}
            </h4>
            </div>
            <div className="pokeball-container">
            <h4  class="pokeball-text">
                Types: <br /> {types.map(item => <li>{item.type.name}</li>)}
            </h4> 
            </div><br />
           
        </div>
        <div class="fav-button-container">
         { !isFavorite &&(<button class="fav-button" onClick={() => addFavorite(name, abilities, forms, game_indices, moves, species, sprites, stats, types )}>
         Add Favorite
     </button>)}
     { isFavorite && (<button class="fav-button"  onClick={() => removeFavorite(name, abilities, forms, game_indices, moves, species, sprites, stats, types )}>
         Remove Favorite
     </button>) }
     </div>
     </div>
    )
}

export default ResponseDisplay;