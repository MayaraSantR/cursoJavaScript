import { useState } from 'react';
import './style.css'

const Card = () => {

  
  const[dados, setDados] =  useState({
    logradouro: "",
    bairro : "",
    regiao : "",
    estado: ""
  })
  const [cep, setCep] = useState("")

  const buscarCEP = (e) => {
    e.preventDefault()
    fetch (`https://viacep.com.br/ws/${cep}/json/`)
    .then ((res) => res.json())
    .then ((data) => {
      console.log(data)
      setDados({
        logradouro: data.logradouro,
        bairro: data.bairro,
        regiao: data.regiao,
        estado: data.estado
      })
    })
  }
  return (
      <div class="container">
        <h1>🔍 Consulta de CEP</h1>

        <form id="cep-form">
          <input  type="text" id="input_cep" placeholder="Digite o CEP" maxlength="9" required onChange={(e) => setCep(e.target.value)} value={cep}/>
          <button type="submit" id="btn-cep" onClick={buscarCEP}>Buscar</button>
        </form>

        <div class="resultado" id="resultado">
          <p><strong>Logradouro:</strong> <span id="logradouro">{dados.logradouro}</span></p>
          <p><strong>Bairro:</strong> <span id="bairro">{dados.bairro}</span></p>
          <p><strong>Região:</strong> <span id="regiao">{dados.regiao}</span></p>
          <p><strong>Estado:</strong> <span id="estado">{dados.estado}</span></p>
        </div>
      </div>
  );
};

export default Card;
