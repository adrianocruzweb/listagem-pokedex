const pokeAPI = {};
const promiseDetailList = [];
const nameList = []

const getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json());
}

pokeAPI.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    return fetch(url)
        .then(res => res.json())
        .then(jsonBody => jsonBody.results)
        .then(pokemons => pokemons.map(getPokemonDetail))
        .then(pokemonRequests => {return Promise.all(pokemonRequests)})
        .catch((err)=>console.error(err))
        .finally(()=>console.log("API Pokemon Principal Consumida"));
}


