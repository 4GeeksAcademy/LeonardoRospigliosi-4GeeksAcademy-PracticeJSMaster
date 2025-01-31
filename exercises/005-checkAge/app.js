function checkAge(name, age) {
  // your code here
  let cadena= (age>=21)? `Welcome, ${name}!`: `Go home, ${name}!`;
  return cadena
}

console.log(checkAge('Adrian',22));