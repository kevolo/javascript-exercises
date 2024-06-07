const removeFromArray = function(arr, ...items) {
    let retArr = arr.filter(val => {
        for (const item of items) {
            if (val===item) {
                return false;
            }
        }
        return true; 
    });
    return retArr;
};

// Do not edit below this line
module.exports = removeFromArray;
