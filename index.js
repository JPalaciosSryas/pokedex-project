//Fetching pokemon API
const url = "https://pokeapi.co/api/v2/pokemon/6/";
const infoContainer = document.getElementById('info-container')
const pokemonImage = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemon-name');
const pokemonInfo = document.getElementById('pokemon-info');
const searchBox = document.getElementById('search-box');
const button = document.getElementById('button');

button.addEventListener("click", () => {
    infoContainer.style.display = "flex";
    id = searchBox.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
        method: 'GET'
    }).then(response => response.json().then(json => {
        pokemon = json;
        console.log(pokemon);
        pokemonImage.setAttribute("src", pokemon.sprites.front_default);
        pokemonName.innerText = pokemon.name;
        pokemonInfo.innerHTML = `<span id="height">Height: ${pokemon.height + pokemon.weight}</span>`
    }))
})

// console.log('Calling the Pokemon API')
// let pokemon = null;
// fetch(url, {
//     method: 'GET'
// }).then(response => response.json().then(json => {
//     pokemon = json;
//     console.log(pokemon);
//     // pokemonImage.setAttribute("src", pokemon.sprites.front_default);
//     pokemonName.innerText += pokemon.name;
//     pokemonInfo.innerHTML += `<span id="height">Height: ${pokemon.height + pokemon.weight}</span>`
// }))




