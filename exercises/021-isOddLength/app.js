// Write your function here
function isOddLength(param1) {
    let valor=(param1.length %2!=0)?true:false;
    return valor;
}
let output = isOddLength('special');
console.log(output); // true