
class Person {
    //Agregue el tipo a las propiedades
    // ssn: number
    // firstName y lastName: string

    /* Inicio */
    ssn : number ;
    firstName : string;
    lastName : string; 
    /* Fin */

     //Agregue el tipo a los parámetros 
    // ssn: number
    // firstName y lastName: string
    /* Inicio */
    constructor(ssn: number, firstName : string, lastName : string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    /* Fin */

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


let claseInstanciacion = () => {

	
	/* Inicio */
    //Instancie el objeto person de la clase Person
  let person:Person = new Person(2, "Angelo","Zurita"); 	
    /* Fin */

	return person;
}

console.log(claseInstanciacion())

export {claseInstanciacion}
