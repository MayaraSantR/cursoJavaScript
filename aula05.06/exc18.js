let quadrado = document.getElementById("quadrado")

quadrado.addEventListener("mouseover", function(){

    quadrado.style.width = "200px";
    quadrado.style.height = "200px";
})

quadrado.addEventListener("mouseout", function(){

    quadrado.style.width = "";
    quadrado.style.height = "";
})