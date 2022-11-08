
import { useRouter } from 'next/router'
import { NextPage,GetStaticProps,GetStaticPaths} from 'next';
import {Layout} from '../../components/layouts'
import {pokeApi} from '../../api';
import {Pokemon} from '../../interfaces'
import { getPokemonInfo } from '../../utils';

interface Props {
    pokemon:Pokemon;
}

const PokemonPage:NextPage<Props> = ({pokemon}) =>{

    return(
        <Layout title="alguno">
                <h1>{pokemon.name}</h1>
        </Layout>
    )
    
}

export const  getStaticPaths:GetStaticPaths= async (ctx) => {
    const pokemons151 = [...Array(151)].map((value, index)=>`${index+1}`)

    return {
      paths: pokemons151.map(id => ({
        params:{id}
      })),
      fallback: 'blocking' // can also be true or 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    
    const {id} = params as {id:string}

    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`).catch( err => 'error')

    const pokemon = await getPokemonInfo(id)

    if(!pokemon ){
      return {
        redirect:{
          destination:'/',
          permanent:false
        }
      }
    }
    
    return{
        props:{
           pokemon   
        },
        revalidate:120
      }
  }

  
export default PokemonPage
