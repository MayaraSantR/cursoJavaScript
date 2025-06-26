import { useState } from "react"
import './App.css'

const App = () => {

  // const [contador, setContador] = useState(0) 
  
  // const incrementar = () => {
  //   setContador(contador+3)
  //   console.log(contador)
  // }

  const [nome, Setnome] = useState("Pedro")
  const [especie, setEspecie] = useState("")
const buscar = () =>{
  fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results[0].name)
    Setnome(data.results[0].name)
    setEspecie(data.results[0].species)
  })
  .catch((err) =>{
    console.log(err)
  })
}

  return(
    <div>
      <p>Nome:{nome}</p>
      <p>Espécie:{especie}</p>
      <button onClick={buscar}>Buscar</button>
    </div>
  )
}
export default App