exports.sort =  function(dictionario) {

    //this function return an Array with all key and values of dictionario
    const items = Object.keys(dictionario).map(function(key) {
        return [key, dictionario[key]];
    });

    items.sort((a, b) => {
        return b[1] - a[1]; 
    })

    return items;
}