const convertPokemonToHtml = (pokemon) => {

    console.log(pokemon);

    return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="description">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div>
            </li>`;
}

pokeAPI.getPokemons()
    .then(
        (pokemonList)=>{
            const pokemonHtml = pokemonList.map(item => convertPokemonToHtml(item)).join('');
            document.querySelector('.pokemons').innerHTML = pokemonHtml;
        }
    );
