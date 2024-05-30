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
    let counter=0;
    for (let pkm of allPKM) {
       
        counter++;
        content.innerHTML += `
            <div class="card ${counter}" id="cardID">
                <img src="${pkm.img}" class="MonsterPic">
                <h5 class="MonsterName card-title">${pkm.name}</h5>
                <div class="MonsterType1">${pkm.types[0]}</div>
                <div class="MonsterType2">${pkm.types[1] ? pkm.types[1] : ''}</div>
            </div>
        `;
    }
}

function addTypeColor() {
    let counter=0;
    for (let pkm = 0; pkm < allPKM.length; pkm++) {
        counter++;
        let checkType = allPKM[pkm].types[0];


        if (typeof checkType === 'string' && checkType.toLowerCase() === 'grass') {
            document.getElementById("cardID").classList.add("TypeColor-Grass");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'bug') {
            document.getElementById("cardID").classList.add("TypeColor-Bug");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'dark') {
            document.getElementById("cardID").classList.add("TypeColor-Dark");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'dragon') {
            document.getElementById("cardID").classList.add("TypeColor-Dragon");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'electric') {
            document.getElementById("cardID").classList.add("TypeColor-Electric");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'fairy') {
            document.getElementById("cardID").classList.add("TypeColor-Fairy");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'fighting') {
            document.getElementById("cardID").classList.add("TypeColor-Fighting");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'fire') {
            document.getElementById("cardID").classList.add("TypeColor-Fire");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'fly') {
            document.getElementById("cardID").classList.add("TypeColor-Fly");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'ghost') {
            document.getElementById("cardID").classList.add("TypeColor-Ghost");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'ground') {
            document.getElementById("cardID").classList.add("TypeColor-Ground");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'ice') {
            document.getElementById("cardID").classList.add("TypeColor-Ice");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'normal') {
            document.getElementById("cardID").classList.add("TypeColor-Normal");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'poisen') {
            document.getElementById("cardID").classList.add("TypeColor-Poisen");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'psychic') {
            document.getElementById("cardID").classList.add("TypeColor-Psychic");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'rock') {
            document.getElementById("cardID").classList.add("TypeColor-Rock");

        } if (typeof checkType === 'string' && checkType.toLowerCase() === 'steel') {
            document.getElementById("cardID").classList.add("TypeColor-Steel");

        } else (typeof checkType === 'string' && checkType.toLowerCase() === 'water') 
            document.getElementById("cardID").classList.add("TypeColor-Water");

        }
    }



