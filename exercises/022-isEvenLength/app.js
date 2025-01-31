// Write your function here
function isEvenLength(param1) {
    let valor=(param1.length %2==0)?true:false;
    return valor;
}
let output = isEvenLength('wow');
console.log(output); // --> false
