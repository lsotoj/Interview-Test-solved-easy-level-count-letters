
exports.hashTable = function (keys) {
    const dictionario = {};

    for(let key of keys) {
        if(key in dictionario) {
           ++dictionario[key];
        } else {
            dictionario[key] = 1;
        }
    }

    return dictionario;
}