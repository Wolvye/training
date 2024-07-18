class Contact extends Person {
    firstName;
    lastName;

    constructor(fN, lN) {
        super(this.firstname,this.lastName);
        this.firstName = firstName;
        this.lastName = lastName;
    }
    printFullName() {
        console.log('${this.firstName},${this.lastName}')   //es muss auch hier das THIS dazu. ansonsten geht es nicht
    }
}
// Beschreibung, wie ein Objekt aussehen soll, Vorlage, Schablone

// class Contact()
//    {
//     firstname; undefined
//     lastName; undefined
// } Das Class Contact erzeugt ein neues JSON Array 
