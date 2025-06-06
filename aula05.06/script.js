// let p1 = document.getElementById("p1")


// let btn = document.getElementsByClassName("btn")

// btn[0].addEventListener("click", function(){
// p1.innerText = "Troquei"

// })

//  let c1 = document.getElementById("c1")

//  c1.addEventListener("mouseover", function(){
//     c1.style.backgroundColor = "pink"
//  })
 
//  c1.addEventListener("mouseout", function(){
//    c1.style.backgroundColor = "deeppink"
//  })

 //click - Quando o usuario clicar
 //mouseover - Quando o usuario passa o mouse por cima
 //mouseout -   Quando o usuario retira o mouse de cima

//  document.addEventListener("keydown", function(event){
//    if(event.toLowerCase() ==="a"){
//     alert("Você apertou a tecla A")
//    }
//  })

// let selecionar = document.getElementById("selecionar")

// selecionar.addEventListener("change", function(event){
//     console.log(`Opção selecionada:${event.target.value}`)
// })


// console.log("1.Começou")
// setTimeout(() => {
//     console.log("2.Executando")
// },2000)

// console.log("3.Terminando")

// function assarPizza(callback){
//     setTimeout(() =>{
//         console.log("Pizza chegou!")
//         callback()
//     }, 2000)
// }


// function comerPizza(){
//     console.log("Comendo a pizza")
// }

// console.log("Preparando a pizza")
// comerPizza(comerPizza)

function pedirComida(callback){
    setTimeout(() => {
        console.log("Pedido pronto!")
        callback()
    }, 2000)
}
function comer(){
    console.log("Comer a comida")
}

console.log("Pedido feito...Aguarde")
pedirComida(comer)