

/*
 @author Marcos Severino Alves
 validador CNPJ
 o cnpj é composto por 14 numeros,  onde os dois últimos números são os digitos verificadores.
 Exemplo cnpj:  
 114447770001  6   1
              Dv1 Dv1
 
 Calculo do primeiro digito verificador.
 
 Devemos multiplicar os 12 numeros iniciais do cnpj da direita para esquerda com o fato de multiplicação de 2 a 9,  e no décimo número o fator de multiplicação
 se inicia novamente de 2 até 5.
 
 1      1     4     4    4      7     7     7      0     0     0     1    CNPJ sem os dois últimos numeros
 x      x     x     x    x      x     x     x      x     x     x     x
 (5)    4     3     2   (9)     8     7     6      5     4     3     2    Fator de multiplicação
 
 5 + 4 + 12 + 8 + 36 + 56 + 49 + 42 + 0 + 0 + 0 + 2    resultado da multiplicação mais soma total = 214
 
 
 
 divisão:
 214 / 11 = 19
 Multiplicação:
 11 x 19 = 209
 subtração:
 214 - 209 = 5 
 resto = 5
 resto < 2 = resultado 0
 resto > 2 = 11 - Resto
 11 - resto 5 = 6
 Dv1 = 6
 
*/

var capturacnpj
var numeros0a4
var numeros4a12
var numeros0a12
var resultado = 0;
var fatormultiplicacao5 = 5;
var fatormultiplicacao9 = 9;
var resto = 0;
var numero = 11;
var digitoverificador1 = 0;
var cnpjverdadeiro = "";

/*o prompt captura o número completo do cnpj e grava a informação na variável capturacnpj */


capturacnpj = prompt("Digite o numero completo do CNPJ com 14 numeros. O validador não aceita  ponto, barra ou hífen");
numeros0a12 = capturacnpj.substring(0, 12);
numeros0a4 = capturacnpj.substring(0, 4);
numeros4a12 = capturacnpj.substring(4, 12);


alert("CNPJ com os 12 numeros iniciais = " + numeros0a12);
console.log(numeros0a12)
for (var iniciozero = 0; iniciozero <= 3; iniciozero++) {
    resultado += numeros0a4[iniciozero] * fatormultiplicacao5;
    fatormultiplicacao5--;

}

for (var iniciozero = 0; iniciozero <= 7; iniciozero++) {
    resultado += numeros4a12[iniciozero] * fatormultiplicacao9;
    fatormultiplicacao9--;
}
resto = resultado % numero;

if (resto < 2) {
    digitoverificador1 = 0;


} else {
    resto > 2; digitoverificador1 = (11 - resto);

    alert("Resultado do primeiro digito verificador = " + digitoverificador1);
    console.log(digitoverificador1);
    capturacnpj13 = numeros0a12 + digitoverificador1;



    /* para calcular o segundo digito verificador será necessário utilizar o cnpj12+dv1
    
    1     1     4     4     4      7     7     7       0     0     0     1    6   CNPJ sem os dois últimos numeros
    x     x     x     x     x      x     x     x       x     x     x     x    x
   (6)    5     4     3     2     (9)    8     7       6     5     4     3    2   Fator de multiplicação                  
    6  +  5  +  16 +  12  + 8    + 63  + 56  + 49  +   0  +  0  +  0  +  3  + 12   resultado da multiplicação mais soma total = 230
    
    divisão:
    230 / 11 = 20
    Multiplicação
    11 x 20 = 220
    subtração:
    230 - 210 = 10
    resto = 10
    resto < 2 = resultado 0
    resto > 2 = 11 - Resto
    11 - resto 10 = 1
    Dv2 = 1
    
    */
    var capturacnpj13
    var numeros0a5
    var numeros5a13
    var numeros0a12
    resultado = 0;
    var fatormultiplicacao6 = 6;
    var fatormultiplicacao9 = 9;
    var resto = 0;
    var numero = 11;
    var digitoverificador2 = 0;
    /*o prompt captura o número completo do cnpj e grava a informação na variável capturacnpj */
    /*  11444777000161  */

    capturacnpj13.length
    numeros0a13 = capturacnpj13.substring(0, 13);
    numeros0a5 = capturacnpj13.substring(0, 5);
    numeros5a13 = capturacnpj13.substring(5, 13);
    alert("CNPJ com os 13 numeros iniciais = " + numeros0a13);
    console.log(numeros0a13);
    for (var iniciozero = 0; iniciozero <= 4; iniciozero++) {
        resultado += numeros0a5[iniciozero] * fatormultiplicacao6;
        fatormultiplicacao6--;

    }

    for (var iniciozero = 0; iniciozero <= 7; iniciozero++) {
        resultado += numeros5a13[iniciozero] * fatormultiplicacao9;
        fatormultiplicacao9--;

    }
    resto = resultado % numero;

    if (resto < 2) {
        digitoverificador2 = 0;

    } else {
        resto > 2; digitoverificador2 = (11 - resto);
        alert("Resultado do segundo digito verificador = " + digitoverificador2);
        console.log(digitoverificador2);

    }
    cnpjverdadeiro = capturacnpj13 + digitoverificador2;


    if (capturacnpj == cnpjverdadeiro) {
        alert("Cnpj = " + cnpjverdadeiro + " valido");
    }
    else { alert("CNPJ = " + capturacnpj + " inválido") }
}
