const a = 10;
const b = 20;
const c = 5;

let adicao = a + b;
let subtracao = a - b;
let divisao = a / b;
let multiplicacao = a * b;
let modulo = a % b;

if (a > b) {
    console.log("a é maior que b");
} else {
    console.log("b é maior que a");
}

if (a> b && a > c){
    console.log("O maior número é a");
} else if (b > a && b > c){
    console.log("O maior número é b");
} else {
    console.log("O maior número é o c")
}

if (c > 0) {
    console.log("positivo");
} else if (c < 0) {
    console.log("negativo");
} else {
    console.log("zero")
}

let anguloA = 50;
let anguloB = 100;
let anguloC = 30;

let somaAngulos = anguloA + anguloB + anguloC;
let todosAngulosPosi = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (todosAngulosPosi) {
  if (somaAngulos === 180){
      console;log(true);
  } else {
      console.log(false);

  };
} else {
    console.log("erro: ângulo não especificado");
}