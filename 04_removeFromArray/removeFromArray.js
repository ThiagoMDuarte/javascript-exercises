const removeFromArray = function(array, ...itemRemove) {
    return array.filter(item => !itemRemove.includes(item))    
};


// Do not edit below this line
module.exports = removeFromArray;
