let contacts =[{
     //JSON = JavaScript Object Notation
     'fistName':'Jens',
     'surName': 'Müller'
}];



//  firstName und lastName von class Contacts stehen in direkter Verbindung mit MyContect[]
// fN und LN stehen mit der Variablenzuweisung in direkter Verbindung
function addContact(fN,lN){
    let myContect = new Contact(fN,lN);
    contacts.push (myContect);
}
 

addContact("Alain","Soltau");