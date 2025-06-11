let nome = document.getElementById("nome")
let username = document.getElementById("username")
let rua = document.getElementById("rua")


fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) =>{

    nome.innerText = data[0].name
    username.innerText = data[0].username
    rua.innerText = data[0].address.street


    console.log(data[0].address.city)
})
.catch((err) => {
    nome.innerText = "Não foi possivel localizar o usuário"
    username.innerText = "Não foi possivel localizar o username"
    rua.innerText = "Não foi possivel localizar a rua "

})