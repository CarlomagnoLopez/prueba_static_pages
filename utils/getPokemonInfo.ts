import pokeApi from '../api/pokeAPI'
import { Pokemon } from '../interfaces';

export const getPokemonInfo = async (nameOrId:string) => {

    try {

        const {data} = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`).catch(error=>error)

    
        return {
            id:data.id,
            name:data.name,
            sprites:data.sprites
        }
        
    } catch (error) {
        return null
    }
    

}