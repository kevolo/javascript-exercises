const repeatString = function(text, multiplier) {
    if (multiplier < 0) {
        return "ERROR";
    }
    if (text==="") {
        return "";
    }
    let retString = "";
    for (let i=0; i<multiplier; i++) {
        retString += text;
    }
    return retString;
};

// Do not edit below this line
module.exports = repeatString;
