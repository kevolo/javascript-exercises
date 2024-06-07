const reverseString = function(text) {
    if (text==="") {
        return "";
    }
    let retString = "";
    for (let i=0; i<text.length; i++) {
        retString += text.charAt(text.length - i -1);
    }
    return retString;
};

// Do not edit below this line
module.exports = reverseString;
