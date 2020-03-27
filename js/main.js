//var nome = "Laura Kotaki";
//var idade = 24;
//var idade2= 25;
//var frase = "Japão é o melhor do mundo";
// alert("Bem vindo " + nome + " tem " + idade); //
// alert (idade + idade2); //
//console.log(nome); // ao inspecionar a pag, isto é carregado no Console
//console.log(idade + idade2);
//console.log(frase.replace("Japão","Brasil")); Replace =  irá substituir.
//console.log(frase.toLowerCase()); toLowerCase = deixar tudo em minusculo
// console.log(frase.toUpperCase()); // to UPPERcase = deixar tudo maiusculo

//Exemplo array - List
var lista = ["Maçã", "Pêra", "Laranja"];
lista.push("uva"); //adicionar um item a mais a lista
lista.pop(); //retira o ultimo elemento da lista
console.log(lista[1]);
console.log(lista);
console.log(lista.length); // ver o tamanho de itens na lista
console.log(lista.reverse());

console.log(lista);
console.log(lista.toString()); //traz a lista com string

console.log(lista[0]); //traz a maça pois é o primeiro elemento da lista
console.log(lista.toString()[0]); //traz a letra M pois é a primeira letra da string

console.log(lista.join(" -- ")); //traz a separação ao inves de virgula, o traço (ou o que determinar dentro do join)


var fruta = { nome: "maça", cor: "vermelha" }
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]
console.log(frutas);
console.log(frutas[0].nome); //se não determinar a possição ficará undefined
alert(frutas[1].cor);

//Exemplo Condicional 
var idade = prompt("Qual a sua idade?");
//var idade = 18;
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("menor de idade");
};


/*Exemplo Laços de repetição 1 

var count = 0;
while (count <= 5) {
    console.log(count);
    //alert(count);
    count = count + 1; // pode substituir por: count++
};
*/

/* Exemplo Laços de repetição 2
var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/

// Exemplo Date

var d = new Date();
alert(d.getMonth()+1); //no mês sempre tem que colocar +1 pois ele inicia a contagem do 0
alert(d.getHours());
alert(d.getMinutes());
