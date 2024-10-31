const pokemonOL = document.querySelector('.pokemons');
const loadMOreButton = document.getElementById('loadMore');
const limit = 5;
let offset = 0;


const convertPokemonAPIDetailtoPokemon = (pokeDetail) => {
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.order;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map(typeSlot=>typeSlot.type?.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;
    pokemon.imgUrl = pokeDetail.sprites?.other?.dream_world?.front_default;

    return pokemon;
}

const convertPokemonToHtml = (pokemon) => {
    return `<li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="description">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.imgUrl}" alt="${pokemon.name}">
                </div>
            </li>`;
}

const loadPokemonItens = (offser, limit) => {
    pokeAPI.getPokemons(offser, limit)
        .then(detailedPokemonList=>detailedPokemonList.map(convertPokemonAPIDetailtoPokemon))
        .then(pokemonList => pokemonOL.innerHTML += pokemonList.map(convertPokemonToHtml).join(''))
}

loadPokemonItens(offset, limit);

loadMOreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonItens(offset, limit);
})