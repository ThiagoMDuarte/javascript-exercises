const repeatString = function(string, times) {
    if (times < 0) {
        return 'ERROR'
    }
    else {
    let rep = string.repeat(times)
    return rep
    }
};

// Do not edit below this line
module.exports = repeatString;
