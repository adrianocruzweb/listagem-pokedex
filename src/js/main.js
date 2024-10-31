

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

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

fetch(url).then((res)=>{
    return res.json();
}).then((jsonBody)=>jsonBody.results
).then((pokemonList)=>{
    const pokemonHtml = pokemonList.map(item => convertPokemonToHtml(item)).join('');
    document.querySelector('.pokemons').innerHTML = pokemonHtml;
}).catch((err)=>{
    console.error(err);
}).finally(()=>{
    console.log("acabou");
})
