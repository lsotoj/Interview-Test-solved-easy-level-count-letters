const test = 'Hola, buenas tardes comoe stan. este mensaje es para realizar pruebas de cuantas letras aparecen y cuantas veces se repiten';

const hashTable = require('./hashTable');
const sort = require('./sort');


function countLetters(texto) {
    
    const nuevoTexto = texto.toLowerCase().replace(/[.," "]/g, "");
    const separatedWords = nuevoTexto.split("");  

    const dictionario = hashTable.hashTable(separatedWords);
    const orderedArray = sort.sort(dictionario);
    
    console.log(orderedArray);
    console.log(orderedArray.slice(0, 5));

}

countLetters(test);

