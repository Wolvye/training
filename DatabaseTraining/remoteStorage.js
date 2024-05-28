function onloadFunc(){
    console.log("test");
    loadData("", {"banana": "rama"});
}

const BASE_URL ="https://remotestorage-9593e-default-rtdb.europe-west1.firebasedatabase.app/" ;

async function loadData(path=""){
    let response= await fetch(BASE_URL+ path + ".json");
    return responseToJson = await response.json();
}


async function postData(path="", data={}){
    let response= await fetch(BASE_URL+ path + ".json",{
        method:"POST",
        header:{
            "Content-Type": "application/json",  //achte auf die Syntax!
        },
        body: JSON.stringify(data)                      //wichtig ist es zu stringify! 
    });
    return responseToJson = await response.json();
}