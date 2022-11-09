import { NextPage, GetStaticProps } from 'next'
import { Layout } from '../components/layouts';
import { PokemonListResponse,SmallPokemon } from '../interfaces';
import {pokeApi} from '../api';
import {PokemonCard} from '../components/pokemon'
import styles from '../styles/Home.module.css'

interface Props{
  pokemons : SmallPokemon[];
}



const HomePage:NextPage<Props> = ({pokemons}) =>  {
  return (
    <Layout title='Listado de datos'>
     
        <ul>
          
            {
              pokemons.map( (pokemon) => (
                <PokemonCard key={pokemon.id}  pokemon={pokemon}/>
                
              ))
            }
        </ul>
    </Layout>
  )
}



export const getStaticProps: GetStaticProps = async(ctx) => {

  console.log("lado del server:::::")
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
 
  const pokemons: SmallPokemon[] = data.results.map( (poke,i) => ({
    ...poke,
    id:i+ 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))
 
  return{
      props:{
        pokemons    
      }
    }

}

export default HomePage