// Menores de 12 anos: R$ 10
// Entre 12 e 17 anos: R$ 15
// Entre 18 e 59 anos: R$ 30
// A partir de 60 anos: R$ 20


let idade = 20

if (idade >= 60 ){
    console.log("R$20")
}else if(idade >= 18 ){
    console.log("R$30")
}else if(idade >= 12){
    console.log("R$15")
} else{
    console.log("R$10")
}

