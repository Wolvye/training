const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
let responseToJson;
let allPKM = [];

async function init() {
    await loadPKM();
    render();
    addTypeColor()
}

async function loadPKM(path = "") {
    let response = await fetch(BASE_URL);
    responseToJson = await response.json();
    console.log(responseToJson);

    for (let pokemon of responseToJson.results) {
        let pokemonResponse = await fetch(pokemon.url);
        let pokemonData = await pokemonResponse.json();

        allPKM.push({
            name: pokemonData.name,
            img: pokemonData.sprites.other.home.front_default,
            types: pokemonData.types.map(typeInfo => typeInfo.type.name)
        });
    }
}

function render() {
    let content = document.getElementById("MonsterCardID");
    content.innerHTML = "";

    for (let pkm of allPKM) {
        
        content.innerHTML += `
            <div class="card">
                <img src="${pkm.img}" class="MonsterPic">
                <h5 class="MonsterName card-title">${pkm.name}</h5>
                <div class="MonsterType1">${pkm.types[0]}</div>
                <div class="MonsterType2">${pkm.types[1] ? pkm.types[1] : ''}</div>
            </div>
        `;
    }
}

function addTypeColor(){
    
    if (pkm.types[0]==grass) {
        MonsterCardID.classList.add("TypeColor-Grass");    
    }

}
