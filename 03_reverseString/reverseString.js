const reverseString = function(string){
    let tamanho = string.length * -1
    let newString = ''
    for (let i = -1; i >= tamanho  ; i--){
      console.log(newString += string.at(i))
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
