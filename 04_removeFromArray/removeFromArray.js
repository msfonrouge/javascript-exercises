const removeFromArray = function(array, ...extra) {
    return array.filter((element) => !extra.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
