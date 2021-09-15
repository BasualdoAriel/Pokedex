const getPokemon = async (id) => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

function UpdateAbility(habilidades) {
    let arrayHabilidades = [];
    for (let habilidad of habilidades) {
        arrayHabilidades.push(habilidad.ability.name);
    }
    return arrayHabilidades;
}

async function PokeInfo(poke){
    containerPoke.textContent = poke.name;
    imagen.setAttribute('src', poke.sprites.front_default);
    imagen2.setAttribute('src', poke.sprites.back_default);
    imagen3.setAttribute('src', poke.sprites.front_shiny);
    pokeId.textContent="Poke ID: "+poke.id;
    let ability = await UpdateAbility(poke.abilities)
    abilities.innerHTML =ability.toString();
}

async function PokeInfoSec(poke){
    pokeEvolve.textContent = poke.name;
    imagenEvo.setAttribute('src', poke.sprites.front_default);
    imagenEvo2.setAttribute('src', poke.sprites.back_default);
    imagenEvo3.setAttribute('src', poke.sprites.front_shiny);
    let ability = await UpdateAbility(poke.abilities)
    abilitiesEvo.innerHTML = "Abilities </br>" + ability.toString();
}

const updatePokemon = async (item) => {
    let secondPokemon=await getPokemon(item.id+1);
    try {
        PokeInfo(item);
        PokeInfoSec(secondPokemon);
    } catch (e) {
        console.error(e);
    }
}
search.addEventListener('change', async () => {
    const res = await getPokemon(search.value.toLowerCase());
    updatePokemon(res);
})

const init = async () => {
    const firstPokemon = await getPokemon(25);
    updatePokemon(firstPokemon);
}
document.addEventListener('DOMContentLoaded', init)