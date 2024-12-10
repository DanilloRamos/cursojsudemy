function forneceSoma (num1, num2, num3){
    return num1+num2+num3
}

function calculaMedia(num1, num2, num3){
    let soma = forneceSoma(num1, num2, num3)
    return soma/3    
}

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let num3 = parseFloat(prompt("Digite o terceiro número: "));

// Chamando as funções
let soma = forneceSoma(num1, num2, num3);
let media = calculaMedia(num1, num2, num3);

// Exibindo os resultados
console.log(`A soma dos números é: ${soma}`);
console.log(`A média dos números é: ${media.toFixed(2)}`);