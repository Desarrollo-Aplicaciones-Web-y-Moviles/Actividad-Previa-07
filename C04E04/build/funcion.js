"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anotacionFuncionRetorno = exports.anotacionFuncionParametros = void 0;
/* Inicio */
//Agregue al parámetro palabras el tipo arreglo de cadena de caracteres y al parámetro indice el tipo número
let anotacionFuncionParametros = (palabras, indice) => {
    /* Fin */
    return palabras.filter(palabra => palabra.length > 3)[indice];
};
exports.anotacionFuncionParametros = anotacionFuncionParametros;
//Tomado de https://www.typescripttutorial.net/typescript-tutorial/typescript-type-annotations/
let anotacionFuncionRetorno;
exports.anotacionFuncionRetorno = anotacionFuncionRetorno;
/* Inicio */
//Agregue el parámetro texto de tipo string
//Agregue el tipo de retorno string 
exports.anotacionFuncionRetorno = anotacionFuncionRetorno = () => {
    console.log('Hello');
    //retorne la cadena texto
    return;
};
/* Fin */
console.log(anotacionFuncionParametros(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], 1));
console.log(anotacionFuncionRetorno('Adiós!'));
