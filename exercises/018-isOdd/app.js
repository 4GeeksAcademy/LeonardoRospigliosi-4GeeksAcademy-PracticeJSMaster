function isOdd(num) {
    let valor=(num%2!=0)?true:false;
    return valor;
}
let output = isOdd(9);
console.log(output); // --> true