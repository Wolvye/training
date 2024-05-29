const BASE_URL ="https://pokeapi.co/api/v2/" ;
let responseToJson;
function init(){
    loadPKM("");
    PKMName("");
}

async function loadPKM(path=""){
    let response = await fetch (BASE_URL + "pokemon/1")
     responseToJson = await response.json();
    console.log(responseToJson);
    document.getElementById("MonsterPicID").src = responseToJson.sprites.other.home.front_default;
    document.getElementById("MonsterNameID").innerHTML = responseToJson.name;
    document.getElementById("MonsterTypeID").innerHTML = responseToJson.types.types.type.name;
    document.getElementById("MonsterTypeID").innerHTML = responseToJson.types.types.type.name;

}

    
    
