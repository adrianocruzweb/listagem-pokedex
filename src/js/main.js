const convertPokemonToHtml = (pokemon) => {

    return `<li class="pokemon">
                <span class="number">#${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>
                <div class="description">
                    <ol class="types">
                        ${pokemon.types.map(type => `<li class="type">${type.type.name}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
                </div>
            </li>`;
}

pokeAPI.getPokemons()
    .then(
        (pokemon)=>{
            console.log(pokemon);
            document.querySelector('.pokemons').innerHTML = pokemon.map(convertPokemonToHtml).join('');
        }
    );




