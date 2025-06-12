let pokemon_name = document.getElementById("pokemon_name")
let pokemon_number = document.getElementById("pokemon_number")
let pokemon_image = document.getElementById("pokemon_image")



fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((res) => res.json())
.then((data) => {
    // console.log(data.sprites.versions["generation-v"]["black-white"].animated.front_default)

    // console.log(data.name)
    // console.loh(data.id)

    pokemon_name.innerText = data.name
    pokemon_number.innerText = data.id
    pokemon_image.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default

})
