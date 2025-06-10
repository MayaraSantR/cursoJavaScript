//---------Promises-------

// let pizzaChegou = true

// const pedido = new Promise((resolve, reject) => {
//     if(pizzaChegou == true){
//       resolve("Pizza Chegou!")
//     }else{
//         reject("Pedido cancelado")
//     }
// })

//certo(.then)
//errado(.catch)
// const verificarResultado = new Promise((resolve, reject)=> {

//         let resultado = 1

//         if(resultado ==2){
//             resolve("Resultado é 2")
//         }else{
//             reject("Não é 2")
//         }
// })

// verificarResultado 
// .then((res)=> {
//     console.log(res)
// })
// .catch((err) =>{
//     console.log(err)
// })

let nome = document.getElementById("nome")
let username = document.getElementById("username")
let email = document.getElementById("email")



fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => {
    console.log(data[0].name)
    nome.innerText = data[0].name
    username.innerText = data[0].username
    email.innerText = data[0].username
})
.catch((err) => {
    nome.innerText = "Não foi possivel localizar o nome"
})


