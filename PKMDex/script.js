const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
let responseToJson;
let allPKM = [];

async function init() {
    await loadPKM();
    render();
    addTypeColor();
}

async function loadPKM(path = "") {
    let response = await fetch(BASE_URL);
    responseToJson = await response.json();

    for (let i = 0; i < responseToJson.results.length; i++) {
        let pokemon = responseToJson.results[i];
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
    let counter = 0;
    for (let i = 0; i < allPKM.length; i++) {
        let pkm = allPKM[i];
        counter++;
        content.innerHTML += `
            <div class="card ${counter}" id="cardID" onclick="openPKM()">
                <img src="${pkm.img}" class="MonsterPic">
                <h5 class="MonsterName card-title">${pkm.name}</h5>
                <div class="MonsterType1">${pkm.types[0]}</div>
                <div class="MonsterType2">${pkm.types[1] ? pkm.types[1] : ''}</div>
            </div>
        `;
    }
}


function addTypeColor() {
    let counter = 0;
    for (let pkm = 0; pkm < allPKM.length; pkm++) {
        counter++;
        let checkType = allPKM[pkm].types[0];
        let card = document.getElementsByClassName(`card ${counter}`)[0];

        if (typeof checkType === 'string' && checkType.toLowerCase() === 'grass') {
            card.classList.add("TypeColor-Grass");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'bug') {
            card.classList.add("TypeColor-Bug");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'dark') {
            card.classList.add("TypeColor-Dark");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'dragon') {
            card.classList.add("TypeColor-Dragon");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'electric') {
            card.classList.add("TypeColor-Electric");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'fairy') {
            card.classList.add("TypeColor-Fairy");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'fighting') {
            card.classList.add("TypeColor-Fighting");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'fire') {
            card.classList.add("TypeColor-Fire");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'fly') {
            card.classList.add("TypeColor-Fly");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'ghost') {
            card.classList.add("TypeColor-Ghost");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'ground') {
            card.classList.add("TypeColor-Ground");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'ice') {
            card.classList.add("TypeColor-Ice");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'normal') {
            card.classList.add("TypeColor-Normal");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'poison') {
            card.classList.add("TypeColor-Poison");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'psychic') {
            card.classList.add("TypeColor-Psychic");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'rock') {
            card.classList.add("TypeColor-Rock");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'steel') {
            card.classList.add("TypeColor-Steel");
        } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'water') {
            card.classList.add("TypeColor-Water");
        }
    }
}


function openPKM(){
    document.getElementById('dialog-bgID').classList.remove('d-none');
}
function closePKM(){
    document.getElementById('dialog-bgID').classList.add('d-none');

}