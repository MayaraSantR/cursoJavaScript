let fundo = document.getElementById("fundo")

let paragrafo = document.getElementById("paragrafo")


fundo.addEventListener("mouseover", function(){
  paragrafo.innerText = "Mouse detectado!!"
})

fundo.addEventListener("mouseout", function(){
  paragrafo.innerText = ""
})

