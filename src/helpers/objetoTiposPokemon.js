async function traerPokemonsPorTipo(){
    const objetoPokemons = {};
    for (let i = 1; i < 18; i++) { //son 18 tipos de pokemon
        const response = await fetch(`https://pokeapi.co/api/v2/type/${i}`);
        const data = await response.json();

        objetoPokemons[`${data.name}`] = data.pokemon; //creamos un atributo con el nombre del tipo de pokemon y su valor seria un arreglo de pokemons
    }

    return objetoPokemons;
    
}

export default traerPokemonsPorTipo;