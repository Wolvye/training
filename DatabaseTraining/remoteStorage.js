function onloadFunc(){
    console.log("test");
    putData("/name",{"banana": "rama"});
}

const BASE_URL ="https://remotestorage-9593e-default-rtdb.europe-west1.firebasedatabase.app/" ;


// Dinge LADEN
async function loadData(path=""){
    let response= await fetch(BASE_URL+ path + ".json");
    return responseToJson = await response.json();
}

// Dinge POSTEN
async function postData(path="", data={}){
    let response= await fetch(BASE_URL+ path + ".json",{
        method:"POST",
        header:{
            "Content-Type": "application/json",  //achte auf die Syntax!
        },
        body: JSON.stringify(data)                      //wichtig ist es zu stringify! 
    });
    return responseToJson = await response.json();
};

//Dinge LÖSCHEN
async function deleteData(path=""){
    let response= await fetch(BASE_URL+ path + ".json",{
        method:"DELETE",
    });
    return responseToJson = await response.json();
};

//Dinge Put (ändern)

async function putData(path="", data={}){
    let response= await fetch(BASE_URL+ path + ".json",{
        method:"PUT",
        header:{
            "Content-Type": "application/json",  //achte auf die Syntax!
        },
        body: JSON.stringify(data)         
    });
    return responseToJson = await response.json();
};