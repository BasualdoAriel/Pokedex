        //https://pokeapi.co/api/v2/pokemon/

        /* La función es asincronica, hago un wait y espera a que la promsa se cumpla */
        /* Creamos una función que consulta la API y nos devuelve un resultado */
        const getPokemon= async(id)=>{
            //pedido para ver si existe, entonces devuelve una promesa
            //hace el fetch y esperá
            try{
                const respuesta= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                /* convierte a json y cuando termina lo guarda en data */
                const data= await respuesta.json();
                return data;
            }catch(error){
                console.log(error)
            }  
        }


        /* función que renderiza el resultado */
        const updatePokemon=(item)=>{
            console.log(item.name);
            /* pokemon es el id del h1 */
            pokemon.textContent=item.name;
            imagen.setAttribute('src', item.sprites.front_default);

        }

        /* Pasamos el parametro de busqueda a la API */
        search.addEventListener('change', async()=>{
            const res= await getPokemon(search.value.toLowerCase());

            updatePokemon(res);
        })

        const init= async()=>{
            /* Llamamos una funcion que consulta la API  */
            const firstPokemon= await getPokemon(25);
            /*Llamamos a una función para renderizar el resultado */
            updatePokemon(firstPokemon);
        }

        /* CADA VEZ QUE DEPENDO DE UN RESULTADO NECESIT USAR UN ASYNC AWAIT */

        document.addEventListener('DOMContentLoaded', init)