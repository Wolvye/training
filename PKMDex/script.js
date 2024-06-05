const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
let responseToJson;
let allPKM = [];

async function init() {
    await loadPKM();
    render();
    addTypeColor();
    filterNames();
}

function filterNames() {
    let search = document.getElementById("search").value;
    search = search.toLowerCase();
    console.log(search);

    let list = document.getElementById('MonsterCardID');
    list.innerHTML = '';
    for (let i = 0; i < allPKM.length; i++) { 
        let pkm = allPKM[i];
        if (typeof pkm.name === 'string' && pkm.name.toLowerCase().includes(search)) {
            let pkmNumber = i + 1; 

            let type2 = pkm.types[1] ? `<div class="MonsterType2">${pkm.types[1].type.name}</div>` : ''; 
            list.innerHTML += `
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
    }
    addTypeColor();
}
    
async function loadPKM() {
    let response = await fetch(BASE_URL);
    responseToJson = await response.json();

    let fetchPromises = responseToJson.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));

   
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

  
    content.innerHTML = html;
    addTypeColor();
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

    for (let i = 0; i < allPKM.length; i++) {
        let checkType = allPKM[i].types[0].type.name.toLowerCase();
        let card = document.getElementsByClassName('card')[i];

      
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
        <button onclick="openPKM(${index - 2})" class="ButtonClass" id="leftButtonID">Back</button>
        <div class="dialog">
            <div class="hp1">HP ${pkm.stats[0].base_stat}</div>
            <div class="headline">
                <h1 class="bigMonsterName MonsterName"> ${pkm.name}</h1>
            </div>
            <div class="MonsterType1_2">
                <div class="MonsterType1">${pkm.types[0].type.name}</div>
                ${type2}
            </div>
            <img id="BigCardID" src="${pkm.sprites.other.dream_world.front_default}" class="MonsterPic">
            <div class="bottomCard">
                <div class="MetaDaten">#${index} Weight: ${pkm.weight}lb Height: ${pkm.height * 10}cm</div>
                <div class="stat">
                    <h2>Statuswerte</h2>
                    <canvas id="stat" class="canvas"></canvas> <!-- Änderung: ID zu 'stat' -->
                </div>
            </div>
        </div>
    </div>
    <button onclick="openPKM(${index})" class="ButtonClass" id="rightButtonID">Next</button>
    `;

    renderChart(index - 1); 




function renderChart(index) { 
    let pkm = allPKM[index]; 
    const ctx = document.getElementById('stat').getContext('2d'); 
    if (ctx) { 
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['HP', 'Attack', 'Defense', 'Sp-Attack', 'SP-Defense', 'Speed'],
                datasets: [{
                    label: '# Power',
                    data: [pkm.stats[0].base_stat, pkm.stats[1].base_stat, pkm.stats[2].base_stat, pkm.stats[3].base_stat, pkm.stats[4].base_stat, pkm.stats[5].base_stat],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } else {
        console.error("Failed to get context for canvas with id 'stat'");
    }
}}
