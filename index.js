const test = 'Hola, buenas tardes comoe stan. este mensaje es para realizar pruebas de cuantas letras aparecen y cuantas veces se repiten';

function countLetters(texto) {
    let diccionario = {};
    
    let nuevoTexto = texto.toLowerCase().replace(/[.," "]/g, "");

    let separatedWords = nuevoTexto.split("");  

    for(let word of separatedWords) {
        if(word in diccionario) {
           ++diccionario[word];
        } else {
            diccionario[word] = 1;
        }
    }

    console.log(diccionario);
}

countLetters(test);
