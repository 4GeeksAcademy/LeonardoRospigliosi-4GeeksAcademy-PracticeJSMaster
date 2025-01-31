// Write your function here
function isEitherEven(num1,num2) {
    let valor=(num1%2==0 || num2%2==0)?true:false;
    return valor;
}
let output = isEitherEven(1, 4);
console.log(output); // --> true