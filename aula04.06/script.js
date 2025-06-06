
// let titulo = document.getElementById("titulo")
// console.log(titulo)

// let paragrafo = document.getElementById("paragrafo")
// console.log(paragrafo)

// let paragrafo2 = document.getElementById("paragrafo2")
// console.log(paragrafo2)

// let pedro = document.getElementById("pedro")
// console.log(pedro)

// let img = document.getElementById("img")
// console.log(img)

// let button = document.getElementById("button")
// console.log(button)

//-----------Usando Class ----------------

let p1 = document.getElementsByClassName("p1")
console.log(p1)

let texto = document.getElementsByClassName("texto")
console.log(texto)


let titulo = document.getElementById("titulo")

 titulo.style.color = "pink"
 titulo.style.fontSize = "50px"
 titulo.style.backgroundColor  = "black"
 titulo.style.border = "10px solid black"

let button = document.getElementById("button")

 button.addEventListener("click", function(){
    titulo.innerText = "Titulo Principal"
    titulo.style.color = "purple"
 })
