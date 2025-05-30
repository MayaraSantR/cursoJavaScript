// 1: Janeiro
// 2: Fevereiro
// 3: Março
// 4: Abril
// 5: Maio
// Qualquer outro número: “Mês inválido”

let mes = 4;

switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
    default:
        console.log("Mês invalido")
        break;
}