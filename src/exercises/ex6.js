const { forEach } = require("lodash");

function maxArray(a) {
   return Math.max(...a);
}

function removeDuplicate(arr) {
    return [...new Set(arr)]
}

function checksSpecificValue(a,b) {
    return a.includes(b);
}

function orderAsc(a){
    return a.sort();
}
module.exports = {
    maxArray: maxArray,
    removeDuplicate: removeDuplicate,
    checksSpecificValue: checksSpecificValue,
    orderAsc: orderAsc,
}