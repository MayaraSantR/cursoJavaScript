// https://viacep.com.br/ws/01001000/json/

let logradouro = document.getElementById("logradouro");
let bairro = document.getElementById("bairro");
let regiao = document.getElementById("regiao");
let estado = document.getElementById("estado");

let buscar = document.getElementById("btn-cep")
let input_cep = document.getElementById("input_cep")


function buscarCEP(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      logradouro.innerText = data.logradouro;
      bairro.innerText = data.bairro;
      regiao.innerText = data.regiao;
      estado.innerText = data.estado;
    });
}

buscar.addEventListener("click", function(event){
    buscarCEP(input_cep.value)
    event.preventDefault() 
})
