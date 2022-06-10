let num = [1, 2, 3, 4, 5, 100, 200];
let res = 0;
let maior = 0;
let imp = 0;
let menor = num[0];
let adiciona ;

for (let i = 0; i < num.length; i += 1) {
    res += num[i]
}
let soma = res / num.length
console.log(soma);


if (res > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor que 20");
}





for (let i = 0; i < num.length; i++) {
    if (num[i] > maior) {
        maior = num[i]
    }
}
console.log(maior)




for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
        imp++
    }
}
if (imp % 2 === 0) {
    console.log("não possue numeros impares");
} else {
    console.log(imp);
}




for (let i = 1; i < num.length; i++) {
    if (num[i] < menor) {
        menor = num[i]
    }
} console.log(menor)





for (let i = 0; i <= 25; i++) {
    num.push(i)
}console.log(num);




for (let i = 0; i < num.length; i ++){
    console.log(num[i] / 2)
};