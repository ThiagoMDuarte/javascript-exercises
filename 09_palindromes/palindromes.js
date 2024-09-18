const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^\w]/g, '')
    let revString = [...string].reverse()
    revString = revString.join('')
    if (revString == string){
        return true
    } else return false
};

// Do not edit below this line
module.exports = palindromes;
