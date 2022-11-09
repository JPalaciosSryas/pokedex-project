//Fetching pokemon API
const url = "https://pokeapi.co/api/v2/pokemon/14/";

console.log('Calling the Pokemon API')
fetch(url, {
    method: 'GET'
}).then(response => response.json()).then(json => {
    console.log(json)
    document.getElementById('id1').innerText = json
});
