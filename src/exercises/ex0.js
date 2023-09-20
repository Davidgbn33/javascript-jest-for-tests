function sum(a, b) {
    return a + b;
  }

function subtracts(a, b) {
    return a - b;
}
function multiplies(a, b) {
    return a * b;
}
function substring(a, b) {
  return a.includes(b)
}
function reverse(str) {
  return str.split("").reverse("").join("");
}
function capitalyse(str) {
  return str.charAt(0).toUpperCase() + 
  str.slice(1);
}

function pair(a) {
 return (a %  2 === 0)
}

function kelvinToCelsius(a){
  return ( a - 32) * (5/9);
}

/* // permet d'exporter la function dans d'autre fichier. */
  module.exports = {
    multiplies: multiplies,
    sum: sum,
    subtracts: subtracts,
    substring: substring,
    reverse: reverse,
    capitalyse: capitalyse,
    pair: pair,
    kelvinToCelsius: kelvinToCelsius
  };