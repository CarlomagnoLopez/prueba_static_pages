import { FC } from 'react';
import { useRouter } from 'next/router';
import { SmallPokemon } from '../../interfaces'
import Image from 'next/image';

interface Props {
    pokemon: SmallPokemon
}
export const PokemonCard:FC<Props> = ({pokemon}) =>{

    const router = useRouter()

    const onClickPokemon = () =>{
        router.push(`/pokemon/${pokemon.id}`)
    }

    return(
        <li key={pokemon.id} onClick={onClickPokemon}>

                    {pokemon.id} - {pokemon.name}
                    <Image
                      src={pokemon.img}
                      alt="Picture of the author"
                       width={100} 
                       height={100} 
                    />

                </li>
       
    )
}