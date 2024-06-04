const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=500offset=0";
let responseToJson;
let allPKM = [];

async function init() {
    await loadPKM();
    render();
    addTypeColor();
}

async function loadPKM() {
    let response = await fetch(BASE_URL);
    responseToJson = await response.json();
    
    // Erstelle eine Liste von Promises für alle Pokemon-Daten-Anfragen
    let fetchPromises = responseToJson.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));
    
    // Warte auf alle Promises und speichere die Ergebnisse
    allPKM = await Promise.all(fetchPromises);
    
    console.log(allPKM);
}

function render() {
    let content = document.getElementById("MonsterCardID");
    content.innerHTML = "";
    let html = "";

    for (let i = 0; i < allPKM.length; i++) {
        let pkm = allPKM[i];
        let pkmNumber = i + 1;

        let type2 = pkm.types[1] ? `<div class="MonsterType2">${pkm.types[1].type.name}</div>` : '';

        // Sammle HTML-Strings statt wiederholter DOM-Manipulationen
        html += `
            <div class="card" id="cardID" onclick="openPKM(${i})">
                <h5 class="MonsterName card-title">${pkm.name} #${pkmNumber}</h5>
                <div class="MonsterType1_2">
                    <div class="MonsterType1">${pkm.types[0].type.name}</div>
                    ${type2} 
                </div>
                <img src="${pkm.sprites.other.dream_world.front_default}" class="MonsterPic">
                <div class="typeBox"></div>
            </div>
        `;
    }
    
    // Setze den gesammelten HTML-String einmal
    content.innerHTML = html;
}

function addTypeColor() {
    let typeClasses = {
        grass: "TypeColor-Grass",
        bug: "TypeColor-Bug",
        dark: "TypeColor-Dark",
        dragon: "TypeColor-Dragon",
        electric: "TypeColor-Electric",
        fairy: "TypeColor-Fairy",
        fighting: "TypeColor-Fighting",
        fire: "TypeColor-Fire",
        flying: "TypeColor-Flying", // Korrigiert von 'fly' zu 'flying'
        ghost: "TypeColor-Ghost",
        ground: "TypeColor-Ground",
        ice: "TypeColor-Ice",
        normal: "TypeColor-Normal",
        poison: "TypeColor-Poison",
        psychic: "TypeColor-Psychic",
        rock: "TypeColor-Rock",
        steel: "TypeColor-Steel",
        water: "TypeColor-Water"
    };

    for (let i = 0; i < allPKM.length; i++) {
        let checkType = allPKM[i].types[0].type.name.toLowerCase();
        let card = document.getElementsByClassName('card')[i];

        // Verwende die vordefinierte Klasse, falls vorhanden
        if (typeClasses[checkType]) {
            card.classList.add(typeClasses[checkType]);
        }
    }
}

function addTypeColor2(index) {
    let checkType = allPKM[index].types[0].type.name.toLowerCase();
    let card2 = document.getElementsByClassName('dialog')[0];
    
    let typeClasses = {
        grass: "TypeColor-Grass",
        bug: "TypeColor-Bug",
        dark: "TypeColor-Dark",
        dragon: "TypeColor-Dragon",
        electric: "TypeColor-Electric",
        fairy: "TypeColor-Fairy",
        fighting: "TypeColor-Fighting",
        fire: "TypeColor-Fire",
        flying: "TypeColor-Flying",
        ghost: "TypeColor-Ghost",
        ground: "TypeColor-Ground",
        ice: "TypeColor-Ice",
        normal: "TypeColor-Normal",
        poison: "TypeColor-Poison",
        psychic: "TypeColor-Psychic",
        rock: "TypeColor-Rock",
        steel: "TypeColor-Steel",
        water: "TypeColor-Water"
    };

    // Verwende die vordefinierte Klasse, falls vorhanden
    if (typeClasses[checkType]) {
        card2.classList.add(typeClasses[checkType]);
    }
}

function openPKM(index) {
    document.getElementById('dialog-bgID').classList.remove('d-none');
    bigCard(index);
    addTypeColor2(index);
}

function closePKM() {
    document.getElementById('dialog-bgID').classList.add('d-none');
}

function bigCard(index) {
    event.stopPropagation();
    let bigCard = document.getElementById("dialog-bgID");
    bigCard.innerHTML = "";
    let pkm = allPKM[index]; 
    index++;
    
    let type2 = pkm.types[1] ? `<div class="MonsterType2">${pkm.types[1].type.name}</div>` : '';

    bigCard.innerHTML += `
    <div class="DialogNavi">
    <button onclick="openPKM(${index-2})" class="ButtonClass" id="leftButtonID">Back</button>
        <div class="dialog " >
        <div class="hp1">HP ${pkm.stats[0].base_stat} </div>

            <div class="headline">
                <h1 class="bigMonsterName MonsterName"> ${pkm.name}</h1> 
            </div>
            <div class="MonsterType1_2">
                <div class="MonsterType1">${pkm.types[0].type.name}</div>
                    ${type2} 
            </div>
                    <img id="BigCardID" src="${pkm.sprites.other.dream_world.front_default}" class="MonsterPic">

                    <div class="bottomCard">

                    <div class="MetaDaten" >#${index} Weight: ${pkm.weight}lb Height: ${pkm.height*10}cm</div>
                        <div class="stats">
                            <h2>Statuswerte</h2>
                            <div class="hp ">${pkm.stats[0].stat.name} ${pkm.stats[0].base_stat} </div>
                            <div class="atk">${pkm.stats[1].stat.name} ${pkm.stats[1].base_stat} </div>
                            <div class="def">${pkm.stats[2].stat.name} ${pkm.stats[2].base_stat} </div>
                            <div class="spAtk">${pkm.stats[3].stat.name} ${pkm.stats[3].base_stat} </div>
                            <div class="spDef">${pkm.stats[4].stat.name} ${pkm.stats[4].base_stat} </div>
                            <div class="speed">${pkm.stats[5].stat.name} ${pkm.stats[5].base_stat} </div>
                    </div>
            </div> 
        </div>
        </div>
        <button onclick="openPKM(${index})"  class="ButtonClass" id="rightButtonID" >Next</button>
    </div>    
    `;
}
