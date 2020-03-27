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
/*
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
*/


//Exemplo Condicional 
/* var idade = prompt("Qual a sua idade?");
//var idade = 18;
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("menor de idade");
}; 
*/


/*

Exemplo Laços de repetição 1 

var count = 0;
while (count <= 5) {
    console.log(count);
    //alert(count);
    count = count + 1; // pode substituir por: count++
};

*/


/* 

Exemplo Laços de repetição 2
var count;
for(count=0; count<=5; count++){
    alert(count);
}


*/

// Exemplo Date

/*


var d = new Date();
alert(d.getMonth()+1); //no mês sempre tem que colocar +1 pois ele inicia a contagem do 0
alert(d.getHours());
alert(d.getMinutes());
*/

//JavaScript - Desenvolva páginas web - função

/* function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão ", " Japão ", " Brasil "));


*/


/*

var validar = 0; 

function validaIdade(idade) {
   // var validar = 18;  
   // Posso ou não declarar a variavel dentro da função, porém as variaveis de dentro da função(local), são vistas somente dentro da função.
   // Quando se é declada fora da função(global) e não houver nenhuma variavel declarada dentro, segue a varivel de fora. 
    console.log(validar);
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false
    }
    return validar;
}
var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade));
console.log(validar);


*/

/* function msgbotao(){
    alert("Obrigada por clicar");
}
*/

function msgbotao(){
    document.getElementById("agree").innerHTML = "<b> Obrigada por clicar </b>"; //inserir txt
    
    //console.log(document.getElementById("agradecimento");
}

function redirecionar(){
    window.open("http://www.google.com.br/");
    window.location.href = "http://www.google.com/"; //abre na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Oi, tudo bem?";
    //alert ("trocar texto");
    elemento.innerHTML = "Oi, tudo bem?"
}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; 
   elemento.innerHTML = "Passe o mouse aqui"

   //pode ser usado o document ou elemento - o elemento você declara "ele mesmo"
}

function loud(){
alert("Pagina carregada"); //quando carregado o body, ele da o alerta
}

function change(elemento){
    console.log(elemento.value)
}