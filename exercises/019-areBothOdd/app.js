// Write your function here
function areBothOdd(num1,num2) {
    let valor=(num1%2!=0 && num2%2!=0)?true:false;
    return valor;
}
let output = areBothOdd(1, 3);
console.log(output); // --> true