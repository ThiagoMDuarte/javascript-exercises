const palindromes = function (string) {
    let revString = [...string].reverse()
    revString = revString.join('')
    if (revString == string){
        return true
    } else return false
};

// Do not edit below this line
module.exports = palindromes;
