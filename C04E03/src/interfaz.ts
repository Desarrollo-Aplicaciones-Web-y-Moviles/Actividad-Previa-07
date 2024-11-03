interface Person {
    ssn: string;
    firstName: string;
    lastName: string; 
    age: number;
    married: boolean;   
}

let interfazPropiedades = () => {

	/* Inicio */
	//Defina la variable person del tipo Person
  let person: Person = {
        ssn: "0912345678",
        firstName: "Angelo",
        lastName: "Zurita",
        age: 20,
        married: false
  };
	/* Fin */

	return person;
}

console.log(interfazPropiedades())

export {interfazPropiedades}
