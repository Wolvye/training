const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=14offset=0";
let responseToJson;
let allPKM = [];
// const pokemonTypes = [
//     { type: "Normal", imagePath: "./img/normal.png" },
//     { type: "Fire", imagePath: "./img/fire.png" },
//     { type: "Water", imagePath: "./img/water.png" },
//     { type: "Electric", imagePath: "./img/electric.png" },
//     { type: "Grass", imagePath: "./img/grass.png" },
//     { type: "Ice", imagePath: "./img/ice.png" },
//     { type: "Fighting", imagePath: "./img/fighting.png" },
//     { type: "Poison", imagePath: "./img/poison.png" },
//     { type: "Ground", imagePath: "./img/ground.png" },
//     { type: "Flying", imagePath: "./img/flying.png" },
//     { type: "Psychic", imagePath: "./img/psychic.png" },
//     { type: "Bug", imagePath: "./img/bug.png" },
//     { type: "Rock", imagePath: "./img/rock.png" },
//     { type: "Ghost", imagePath: "./img/ghost.png" },
//     { type: "Dragon", imagePath: "./img/dragon.png" },
//     { type: "Dark", imagePath: "./img/dark.png" },
//     { type: "Steel", imagePath: "./img/steel.png" },
//     { type: "Fairy", imagePath: "./img/fairy.png" }
// ];

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

        allPKM.push(pokemonData);

        //allPKM.push({
        //             name: pokemonData.name,
        //             img: pokemonData.sprites.other.home.front_default,
        //             types: pokemonData.types.map(typeInfo => typeInfo.type.name),
        //             stats: pokemonData.stats.map(statInfo => ({
        //                 name: statInfo.stat.name,
        //                 value: statInfo.base_stat
        //             }))
        //         });
    } console.log(allPKM);
}

function render() {
    let content = document.getElementById("MonsterCardID");
    content.innerHTML = "";
    for (let i = 0; i < allPKM.length; i++) {
        let pkm = allPKM[i];
        let pkmNumber = i + 1;

        let type2 = pkm.types[1] ? `
        
        <div class="MonsterType2">${pkm.types[1].type.name}</div>` : '';  // Überprüfen ob ein zweiter Typ existiert

        content.innerHTML += `
            <div class="card" id="cardID" onclick="openPKM(${i})">
                <h5 class="MonsterName card-title">${pkm.name} #${pkmNumber}</h5>
                
                <div class="MonsterType1">${pkm.types[0].type.name}</div>
                ${type2} 
                <img src="${pkm.sprites.other.dream_world.front_default}" class="MonsterPic">
                <div class="typeBox"></div>
            </div>
        `;
    }
}

function addTypeColor() {
    for (let i = 0; i < allPKM.length; i++) {
        let checkType = allPKM[i].types[0].type.name;
        let card = document.getElementsByClassName('card')[i];

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

function addTypeColor2(index) {
    let checkType = allPKM[index].types[0].type.name;
    let card2 = document.getElementsByClassName('dialog')[0];
    if (typeof checkType === 'string' && checkType.toLowerCase() === 'grass') {
        card2.classList.add("TypeColor-Grass");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'bug') {
        card2.classList.add("TypeColor-Bug");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'dark') {
        card2.classList.add("TypeColor-Dark");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'dragon') {
        card2.classList.add("TypeColor-Dragon");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'electric') {
        card2.classList.add("TypeColor-Electric");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'fairy') {
        card2.classList.add("TypeColor-Fairy");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'fighting') {
        card2.classList.add("TypeColor-Fighting");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'fire') {
        card2.classList.add("TypeColor-Fire");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'fly') {
        card2.classList.add("TypeColor-Fly");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'ghost') {
        card2.classList.add("TypeColor-Ghost");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'ground') {
        card2.classList.add("TypeColor-Ground");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'ice') {
        card2.classList.add("TypeColor-Ice");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'normal') {
        card2.classList.add("TypeColor-Normal");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'poison') {
        card2.classList.add("TypeColor-Poison");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'psychic') {
        card2.classList.add("TypeColor-Psychic");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'rock') {
        card2.classList.add("TypeColor-Rock");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'steel') {
        card2.classList.add("TypeColor-Steel");
    } else if (typeof checkType === 'string' && checkType.toLowerCase() === 'water') {
        card2.classList.add("TypeColor-Water");
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
    let bigCard = document.getElementById("dialog-bgID");
    bigCard.innerHTML = "";
    let pkm = allPKM[index];
    index++;
    let type2 = pkm.types[1] ? `
    <div class="MonsterType2">${pkm.types[1].type.name}</div>` : '';

    bigCard.innerHTML += `
        <div class="dialog " >
      
            <div class="headline">
                <h1 class="bigMonsterName MonsterName"> ${pkm.name}</h1> <div class=hp">${pkm.stats[0].stat.name} ${pkm.stats[0].base_stat} </div>
                </div>
                <div class="MonsterType1">${pkm.types[0].type.name}</div>
                    ${type2} 
                    <img src="${pkm.sprites.other.dream_world.front_default}" class="MonsterPic">

                    <div class="bottomCard">
                    <div class="MetaDaten" >#${index} Weight: ${pkm.weight}lb Height: ${pkm.height*10}cm</div>
                   
                        <div class="stats">
                                <h2>Statuswerte</h2>
                                <div class="hp ">${pkm.stats[0].stat.name} ${pkm.stats[0].base_stat} <div>
                                <div class="atk">${pkm.stats[1].stat.name} ${pkm.stats[1].base_stat} <div>
                                <div class="def">${pkm.stats[2].stat.name} ${pkm.stats[2].base_stat} <div>
                                <div class="spAtk">${pkm.stats[3].stat.name} ${pkm.stats[3].base_stat} <div>
                                <div class="spDef">${pkm.stats[4].stat.name} ${pkm.stats[4].base_stat} <div>
                                <div class="speed">${pkm.stats[5].stat.name} ${pkm.stats[5].base_stat} <div>
                        </div>
                 
                        
                        
           
                </div>
          
               
           
            </div>
        </div>
    `;
}




